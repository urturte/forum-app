import React from "react";
import styles from "./questionsList.module.css";
import Question from "../question/question";
import { useState, useEffect } from "react";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("");
  const fetchQuestions = async () => {
    const result = await fetch("http://localhost:8000/questions");

    const questions = await result.json();
    setQuestions(questions);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.filtering}>
        <button
          onClick={() => setFilter(true)}
          className={styles.filterAnswered}
        >
          Answered
        </button>
        <button
          onClick={() => setFilter(false)}
          className={styles.filterUnanswered}
        >
          Unanswered
        </button>
        <button onClick={() => setFilter("")} className={styles.resetFilter}>
          ↻
        </button>
      </div>
      {filter !== ""
        ? questions
            .filter((question) => question.answered === filter)
            .map((question) => {
              return (
                <div className={styles.content}>
                  <Question question={question} />
                </div>
              );
            })
        : questions.map((question) => {
            return (
              <div className={styles.content}>
                <Question question={question} />
              </div>
            );
          })}
    </div>
  );
};

export default QuestionsList;
