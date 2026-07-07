import { Header } from "./Components/Header/";
import styles from "./app.module.css";
import { Tip } from "./Components/Tip";

export default function App() {

  function handleRestartGame() {
    alert("Game restarted");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais populares do mundo"/>
      </main>
    </div>
  );
}
