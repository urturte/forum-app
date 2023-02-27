import Navbar from "../../components/organisms/navbar/navbar";
import styles from "./askQuestion.module.css";
import QuestionForm from "../../components/molecules/questionForm/questionForm";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <QuestionForm />
    </div>
  );
}

export default App;
