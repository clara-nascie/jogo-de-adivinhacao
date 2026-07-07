import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { WORDS, type Challenge } from "./utils/words";
import { Letter } from "./Components/Letter";
import { Header } from "./Components/Header/";
import { Tip } from "./Components/Tip";
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { LettersUsed } from "./Components/LettersUsed";

export default function App() {
  const [attempts, setAttempts] = useState(0);
  const [letter, setLetter] = useState('')
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  function handleRestartGame() {
    alert("Game restarted");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setAttempts(0);
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais populares do mundo" />
        <div className={styles.word}>
          <Letter value="r" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>
        <LettersUsed />
      </main>
    </div>
  );
}
