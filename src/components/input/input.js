import React from "react";
import styles from "./input.module.css";

const input = ({ placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={styles.main}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default input;
