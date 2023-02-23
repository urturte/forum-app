import React, { useState, useEffect } from "react";
import styles from "./answerForm.module.css";
import Button from "../button/button";
// import { useNavigate } from "react-router-dom";

const AnswerForm = (question) => {
  const [content, setContent] = useState();
  const onClickHandler = async () => {
    const token = window.localStorage.token;
    console.log("title", token);
    const questionId = question.question._id;
    console.log("questionId", questionId);
    if (token) {
      const answerDetails = {
        content: content,
      };
      console.log("questionDetails", answerDetails);
      await fetch(`http://localhost:8000/answer/${questionId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(answerDetails),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
        });
    } else {
      alert("Please login or sign up to ask a question!");
    }
  };

  useEffect(() => {
    onClickHandler();
  }, []);

  return (
    <div className={styles.main}>
      <input
        placeholder="Enter Your answer here..."
        onChange={(event) => setContent(event.target.value)}
        value={content}
      ></input>
      <Button text="Submit" onClick={onClickHandler} />
    </div>
  );
};

export default AnswerForm;
