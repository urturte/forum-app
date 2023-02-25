import Navbar from "../../components/navbar/navbar";
import AnswerBody from "../../components/answersBody/answersBody";
import styles from "./answers.module.css";

function Answers() {
  return (
    <div className={styles.main}>
      <Navbar />
      <AnswerBody />
    </div>
  );
}

export default Answers;
