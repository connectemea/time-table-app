import React from "react";
import styles from "./styles.module.css";

function TimeTableOfDay() {
  return (
    <div className={styles.CardContainer}>
      <HourCard />
      <HourCard />
      <HourCard />
      <HourCard />
      <HourCard />

    </div>
  );
}
const HourCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.Period}>Period 1</h1>
      <h2 className={styles.Teacher}>demo teacher</h2>
      <br />
      <p className={styles.Time}>09:00 to 09:40</p>
    </div>
  );
};

export default TimeTableOfDay;
