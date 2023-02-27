import Navbar from "../../components/organisms/navbar/navbar";
import AnswerBody from "../../components/organisms/answersBody/answersBody";
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
