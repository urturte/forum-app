import React from "react";
import styles from "./button.module.css";

const button = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick()} className={styles.main}>
      {text}
    </button>
  );
};

export default button;
