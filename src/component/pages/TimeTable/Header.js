import React from "react";
import styles from "./styles.module.css";
export default function Header() {
  return (
    <div className={styles.header} >
      <div className={styles.logo}>
        <img src="https://st2.depositphotos.com/6831718/10871/v/950/depositphotos_108712214-stock-illustration-clock-icon-clock-symbol-clock.jpg" alt="logo" />
      </div>
      <div className={styles.title}>
        <p className={styles.date}>28 Aug 2021 </p>
        <h1 className={styles.heading}>Today's Time Tables</h1>

      </div>
      
    </div>
  );
}
