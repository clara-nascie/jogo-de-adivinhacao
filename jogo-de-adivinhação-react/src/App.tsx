import styles from "./app.module.css";
import { Letter } from "./Components/Letter";
import { Header } from "./Components/Header/";
import { Tip } from "./Components/Tip";
import { Input } from "./Components/Input";

export default function App() {
  function handleRestartGame() {
    alert("Game restarted");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais populares do mundo" />
        <div className={styles.word}>
          <Letter value="r" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>
        <h4>Palpite</h4>
        <div>
          <Input autoFocus maxLength={1} placeholder="?" />
        </div>
      </main>
    </div>
  );
}
