import React from "react";
import styles from "./answersList.module.css";
import moment from "moment";
import DeleteButton from "../deleteButton/deleteButton";

const AnswersList = (allAnswers) => {
  const answers = allAnswers.allAnswers.questionAnswers;
  console.log("answers", answers);
  const token = window.localStorage.token;
  const handleDelete = (answer) => {
    const id = {
      id: answer._id,
    };
    console.log(id);
    fetch(`http://localhost:8000/answer/${answer._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(id),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
      });
    window.location.reload(false);
  };
  return (
    <div className={styles.main}>
      {answers &&
        answers.map((answer) => {
          return (
            <div className={styles.content}>
              <h2>{answer.content}</h2>
              <div className={styles.rightContainer}>
                <h4>{moment(answer.dateCreated).fromNow()}</h4>
                <DeleteButton text="X" onClick={() => handleDelete(answer)} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AnswersList;
