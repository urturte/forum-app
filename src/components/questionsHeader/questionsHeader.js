import React from "react";
import styles from "./questionsHeader.module.css";
import Title from "../title/title";
import Button from "../button/button";
// import FilterButtons from "../filterButtons/filterButtons";
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
      {/* <FilterButtons /> */}
    </div>
  );
};

export default QuestionsHeader;
