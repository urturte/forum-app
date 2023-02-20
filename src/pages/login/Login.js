import Navbar from "../../components/navbar/navbar";
import LoginForm from "../../components/loginForm/loginForm";
import styles from "./login.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
