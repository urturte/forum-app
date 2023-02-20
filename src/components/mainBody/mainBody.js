import React from "react";
import styles from "./mainBody.module.css";
import QuestionsList from "../questionsList/questionsList";
import QuestionsHeader from "../questionsHeader/questionsHeader";

const MainBody = () => {
  return (
    <div className={styles.main}>
      <QuestionsHeader title="All Questions" />
      <QuestionsList />
    </div>
  );
};

export default MainBody;
