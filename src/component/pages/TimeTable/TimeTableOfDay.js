import React from "react";
import styles from "./styles.module.css";

function TimeTableOfDay(props) {
  const { tableData } = props;
  const HourCard = (props) => {
    const { hour } = props;
    return (
      <div className={styles.card}>
        <h1 className={styles.Period}>{hour.sub}</h1>
        <h2 className={styles.Teacher}>demo teacher</h2>
        <br />
        <p className={styles.Time}>{hour.time}</p>
      </div>
    );
  };
  return (
    <div className={styles.CardContainer}>
      {tableData.map((hour) => (
        <HourCard hour={hour} />
      ))}
    </div>
  );
}

export default TimeTableOfDay;
