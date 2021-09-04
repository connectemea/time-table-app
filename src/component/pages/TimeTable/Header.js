import React from "react";
import styles from "./styles.module.css";
import Logo from '../images/logo.png';
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.title}>
        <p className={styles.date}>28 Aug 2021 </p>
        <h1 className={styles.heading}>Today's Time Tables</h1>
      </div>
    </div>
  );
}
