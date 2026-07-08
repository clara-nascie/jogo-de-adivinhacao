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

  const ATTEMPT_MAX = 6;

  //Reinicia o jogo
  function handleRestartGame() {
    const isConfirmed = window.confirm("Tem certeza que deseja reiniciar o jogo?");

    //Se o usuário confirmar, reinicia o jogo
    if (isConfirmed) {
      startGame();
    }
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

    // Valida se a entrada é apenas uma letra de A a Z
    if (!/^[a-zA-Z]$/.test(letter)) {
      setLetter("");
      return alert("Por favor, digite apenas letras de A a Z.");
    }

    //Converter para maiúsculo
    const value = letter.toUpperCase();

    //Verifica se a letra já foi usada
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value,
    );
    if (exists) {
      setLetter("");
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

  //serve para verificar se o jogo acabou e reiniciar um novo
  function endGame(message: string) {
    alert(message);
    startGame();
  }

  //Inicia o jogo quando o componente é montado
  useEffect(() => {
    startGame();
  }, []);

  //finaliza o jogo quando o número de tentativas é atingido
  useEffect(() => {
    if (!challenge) {
      return;
    }
    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns, você venceu!");
      }

      const wrongGuesses = lettersUsed.filter((used) => !used.correct).length;

      if (wrongGuesses === ATTEMPT_MAX) {
        return endGame("que pena, não foi dessa vez =/");
      }
    }, 200);
  }, [score, lettersUsed]);

  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.filter((used) => !used.correct).length}
          max={ATTEMPT_MAX}
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleConfirm();
          }}
          className={styles.guess}
        >
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button type="submit" title="Confirmar" />
        </form>
        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
