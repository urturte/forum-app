import Navbar from "../../components/organisms/navbar/navbar";
import LoginForm from "../../components/molecules/loginForm/loginForm";
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
