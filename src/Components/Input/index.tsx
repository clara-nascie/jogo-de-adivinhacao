import styles from "./styles.module.css";

//o react pede um tipo para o input, então vamos usar o 
//ComponentProps para obter os tipos de input
type Props = React.ComponentProps<'input'>;

export function Input({...rest}: Props){ 
    return <input type='text' className={styles.input} {...rest} />
}