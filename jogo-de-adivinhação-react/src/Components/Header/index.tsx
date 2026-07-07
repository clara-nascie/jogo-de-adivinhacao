import logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import restart from "../../assets/restart.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo do jogo" />

      <header>
        <span>
          <strong>5</strong> de 10 tentativas
        </span>
        <button type="button">
          <img src={restart} alt="ícone de reiniciar" />
        </button>
      </header>
    </div>
  );
}
