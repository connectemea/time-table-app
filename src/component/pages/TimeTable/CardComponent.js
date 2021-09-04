import React from "react";
import styles from "./styles.module.css";
function CardComponent() {
  return (
    <div className={styles.card}>
      <h1 className={styles.Period}>Period 1</h1>
      <h2 className={styles.Teacher}>demo teacher</h2>
      <br />
      <p className={styles.Time}>09:00 to 09:40</p>
    </div>
  );
}

export default CardComponent;
