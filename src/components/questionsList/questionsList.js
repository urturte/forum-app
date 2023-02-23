import React from "react";
import styles from "./questionsList.module.css";
import Question from "../question/question";
import { useState, useEffect } from "react";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const fetchQuestions = async () => {
    const result = await fetch("http://localhost:8000/questions");

    const questions = await result.json();
    setQuestions(questions);
    console.log(questions);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <div className={styles.main}>
      {questions.length === 0 ? (
        <div>No questions</div>
      ) : (
        questions.map((question) => {
          return (
            <div className={styles.content}>
              <Question question={question} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default QuestionsList;
