import React from "react";
import styles from "./styles.module.css";
import Logo from "../images/logo.png";
import { days } from "../../const/DateHelper";
export default function Header(props) {
  const { date, selectedDay } = props;
  const day = new Date().getDay() - 1;
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.title}>
        <p className={styles.date}>{date}</p>
        <h1 className={styles.heading}>
          {day === selectedDay
            ? "Today's Time Tables"
            : `${days[selectedDay].full}'s Time Tables`}
        </h1>
      </div>
    </div>
  );
}
