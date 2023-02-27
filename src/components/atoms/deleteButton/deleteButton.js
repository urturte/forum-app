import React from "react";
import styles from "./deleteButton.module.css";

const DeleteButton = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick()} className={styles.main}>
      {text}
    </button>
  );
};

export default DeleteButton;
