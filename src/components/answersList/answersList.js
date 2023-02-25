import React from "react";
import styles from "./answersList.module.css";
import moment from "moment";
import DeleteButton from "../deleteButton/deleteButton";
import LikeDislike from "../likeDislike/likeDislike";

const AnswersList = (allAnswers) => {
  const answers = allAnswers.allAnswers.questionAnswers;
  const token = window.localStorage.token;
  const handleDelete = (answer) => {
    const id = {
      id: answer._id,
    };
    fetch(`http://localhost:8000/answer/${answer._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(id),
    }).then((res) => {
      return res.json();
    });
    window.location.reload(false);
  };
  return (
    <div className={styles.main}>
      {answers &&
        answers.map((answer) => {
          return (
            <div className={styles.content}>
              <LikeDislike />
              <div className={styles.rightContainer}>
                <h2>{answer.content}</h2>
                <div className={styles.bottomContainer}>
                  <h4>{moment(answer.dateCreated).fromNow()}</h4>
                  <DeleteButton text="X" onClick={() => handleDelete(answer)} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AnswersList;
