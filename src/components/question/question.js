import React from "react";
import styles from "./question.module.css";
import DeleteButton from "../deleteButton/deleteButton";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Question = ({ question }) => {
  const navigate = useNavigate();
  const onClickComponent = () => {
    navigate(`/answers/${question._id}`);
  };
  const date = moment(question.dateCreated).fromNow();

  const token = window.localStorage.token;
  const handleDelete = () => {
    const id = {
      id: question._id,
    };
    fetch(`http://localhost:8000/question/${question.id}`, {
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
    <div className={styles.main} onClick={() => onClickComponent()}>
      <h1>{question.title}</h1>
      <div className={styles.rightContainer}>
        <h5>{date}</h5>
        {/* <h6>{answered}</h6> */}
        <DeleteButton text="X" onClick={() => handleDelete()} />
      </div>
    </div>
  );
};

export default Question;
