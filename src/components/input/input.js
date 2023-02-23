import React from "react";
import styles from "./input.module.css";

const input = ({ placeholder, value, onChange, type }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={styles.main}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default input;
