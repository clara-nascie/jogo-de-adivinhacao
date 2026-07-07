import { Header } from "./Components/Header/";
import styles from "./app.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <main>
        <Header />
      </main>
    </div>
  );
}
