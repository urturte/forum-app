import Navbar from "../../components/navbar/navbar";
import RegisterForm from "../../components/registerForm/registerForm";
import styles from "./register.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <RegisterForm />
    </div>
  );
}

export default App;
