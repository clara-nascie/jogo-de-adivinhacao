import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { WORDS, type Challenge } from "./utils/words";
import { Letter } from "./Components/Letter";
import { Header } from "./Components/Header/";
import { Tip } from "./Components/Tip";
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { LettersUsed, type LettersUsedProps } from "./Components/LettersUsed";

export default function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  const ATTEMPT_MAX = 5;

  function handleRestartGame() {
    alert("Game restarted");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setScore(0);
    setLetter("");
    setLettersUsed([]);
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letter.trim()) {
      return alert("Digite uma letra");
    }

    //Converter para maiúsculo
    const value = letter.toUpperCase();

    //Verifica se a letra já foi usada
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value,
    );
    if (exists) {
      return alert("Letra já utilizada: " + value);
    }

    //Conta quantas letras foram acertadas
    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    //Se a letra estiver correta, adiciona true ao array de letras usadas
    const correct = hits > 0;

    //Soma os pontos
    const currentScore = score + hits;

    //Adiciona a letra ao array de letras usadas
    setLettersUsed((prevState) => [...prevState, { value, correct }]);

    //Atualiza a pontuação
    setScore(currentScore);

    //Limpa o campo de entrada
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header 
        current={lettersUsed.length} 
        max={challenge.word.length + ATTEMPT_MAX} 
        onRestart={handleRestartGame}
        />
        <Tip tip={challenge.tip} />
        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase(),
            );
            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>
        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
