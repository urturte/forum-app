import React from "react";
import styles from "./question.module.css";
// import { useNavigate } from "react-router-dom";

const Question = ({ title, dateCreated }) => {
  // const navigate = useNavigate();
  // const onClickComponent = () => {
  //   navigate(`/question/${question.id}`);
  // };

  return (
    <div
      // onClick={() => onClickComponent()}
      className={styles.main}
    >
      <h1>{title}</h1>
      <h5>{dateCreated}</h5>
      {/* <h6>{question.answered}</h6> */}
    </div>
  );
};

export default Question;
