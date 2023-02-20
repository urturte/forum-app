import React from "react";
import styles from "./title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
