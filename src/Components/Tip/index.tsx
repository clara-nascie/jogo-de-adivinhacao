import styles from "./styles.module.css";
import tipIcon from "../../assets/tip.svg";

//esse type serve para definir que a propriedade
//  tip é uma string,
type Props = {
  tip: string;
};

//essa função serve para mostrar a dica,recebendo
//como parametro a prop tip
//o classname é herdado de style.module.css e serve para estilizar o componente
export function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}>
      <img src={tipIcon} alt="ícone de dica" />
      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
}
