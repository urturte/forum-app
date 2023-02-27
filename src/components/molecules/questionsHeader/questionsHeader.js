import React from "react";
import styles from "./questionsHeader.module.css";
import Title from "../../atoms/title/title";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";

const QuestionsHeader = ({ title }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/askQuestion`);
  };
  return (
    <div className={styles.main}>
      <Title title={title} />
      <Button text="Ask question" onClick={() => onClickHandler()} />
    </div>
  );
};

export default QuestionsHeader;
