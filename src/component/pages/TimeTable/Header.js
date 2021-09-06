import React from "react";
import styles from "./styles.module.css";
import Logo from '../images/logo.png';
export default function Header({today}) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.title}>
        <p className={styles.date}>{today}</p>
        <h1 className={styles.heading}>Today's Time Tables</h1>
      </div>
    </div>
  );
}
