import React from "react";
import styles from "./answerHeader.module.css";
import Title from "../title/title";
import moment from "moment";

const AnswerHeader = ({ question }) => {
  const date = moment(question.dateCreated).fromNow();
  return (
    <div className={styles.main}>
      <Title title={question.title} />
      <h4>{date}</h4>
    </div>
  );
};

export default AnswerHeader;
