import React from "react";
import styles from "./answersBody.module.css";
import AnswerHeader from "../../molecules/answerHeader/answerHeader";
import AnswersList from "../../molecules/answersList/answersList";
import AnswerForm from "../../molecules/answerForm/answerForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnswerBody() {
  const { id } = useParams();
  const [answers, setAnswers] = useState();
  const fetchAnswers = async () => {
    const result = await fetch("http://localhost:8000/answers/" + id);
    const answers = await result.json().then((res) => {
      return res.data;
    });

    setAnswers(answers);
  };
  useEffect(() => {
    fetchAnswers();
  }, []);
  return (
    <>
      {answers &&
        answers.map((answer) => {
          return (
            <div className={styles.main}>
              <AnswerHeader question={answer} />
              <AnswerForm question={answer} />
              <AnswersList allAnswers={answer}></AnswersList>
            </div>
          );
        })}
    </>
  );
}

export default AnswerBody;
