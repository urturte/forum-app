import React from "react";
import styles from "./filterButtons.module.css";

const FilterButtons = () => {
  return (
    <div className={styles.main}>
      <button
        // onClick={() => filterAnswered()}
        className={styles.filterAnswered}
      >
        Answered
      </button>
      <button
        // onClick={() => filterUnanswered()}
        className={styles.filterUnanswered}
      >
        Unanswered
      </button>
      <button
        // nClick={() => filterAll()}
        className={styles.filterAll}
      >
        All
      </button>
    </div>
  );
};

export default FilterButtons;
