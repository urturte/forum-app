import Navbar from "../../components/navbar/navbar";
import styles from "./askQuestion.module.css";
import QuestionForm from "../../components/questionForm/questionForm";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <QuestionForm />
    </div>
  );
}

export default App;
