import React from "react";
import styles from "./styles.module.css";
const Home = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleSection}>
        <div className={styles.mainTitle}>TIME TABLE</div>
        <div className={styles.subTitle}>EMEA COLLEGE KONDOTTY</div>
      </div>     
      <div className={styles.bottomTitle}>Crafted with&#128150;
      <span className={styles.tinker}>Tinker</span>
      <span className={styles.hub}>Hub</span>
      </div>
      
    </div>
  );
};

export default Home;
