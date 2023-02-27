import React, { useState } from "react";
import styles from "./questionForm.module.css";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";

const QuestionForm = () => {
  const [title, setTitle] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const token = window.localStorage.token;

    if (token) {
      const questionDetails = {
        title: title,
      };
      const data = fetch("http://localhost:8000/question", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(questionDetails),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result);
        });
      navigate("/");
      window.location.reload(false);
    } else {
      alert("Please login or sign up to ask a question!");
    }
  };

  return (
    <div className={styles.main}>
      <h1>Ask a question</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter Your question here..."
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      ></textarea>
      <Button text="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default QuestionForm;
