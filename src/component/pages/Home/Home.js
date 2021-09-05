import React from "react";
import styles from "./styles.module.css";
import BrandName from "../images/TinkerHubLogo.png";
const Home = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleSection}>
        <div className={styles.mainTitle}>TIME TABLE</div>
        <div className={styles.subTitle}>EMEA COLLEGE KONDOTTY</div>
      </div>
      <div className={styles.MiddleContent}>
        <div className={styles.LoginBox}>
          <div className={`${styles.departmentBox} ${styles.selectSection}`}>
            <select className={styles.selectBox} id="dropdown">
              <option className={styles.selectOption} value="Select Department">Select Department</option>
              <option className={styles.selectOption} value="BSc Computer Science">BSc Computer Science</option>
              <option className={styles.selectOption} value="BA Economics">BA Economics</option>
              <option className={styles.selectOption} value="B.Com Cop">B.Com</option>
              <option className={styles.selectOption} value="BA English">BA English</option>
              <option className={styles.selectOption} value="BSc Microbiology">BSc Microbiology</option>
              <option className={styles.selectOption} value="BA West Asian Studies">
                BA West Asian Studies
              </option>
              <option className={styles.selectOption} value="BSc Biotechnology">BSc Biotechnology</option>
              <option className={styles.selectOption} value="BSc Biochemistry">BSc Biochemistry</option>
              <option className={styles.selectOption} value="BBA">BBA</option>
              <option className={styles.selectOption} value="B.Com Computer Application">
                B.Com Computer Application
              </option>
              <option className={styles.selectOption} value="BVoc Logistics">BVoc Logistics</option>
              <option className={styles.selectOption} value="BVoc Accounting and Taxation">
                BVoc Accounting and Taxation
              </option>
            </select>
          </div>
          <div className={`${styles.semesterBox} ${styles.selectSection}`}>
            <select className={styles.selectBox} id="dropdown">
              <option className={styles.selectOption} value="Select Semester">Select Semester</option>
              <option className={styles.selectOption} value="1st Sem">1st Sem</option>
              <option className={styles.selectOption} value="2nd Sem">2nd Sem</option>
              <option className={styles.selectOption} value="3rd Sem">3rd Sem</option>
            </select>
          </div>
          <div className={styles.showBtn}>
            <button className={styles.button}>Show Timetable</button>
          </div>
        </div>
      </div>

      <div className={styles.bottomTitle}>
        Crafted with&#128150;
        <img className={styles.brandName} src={BrandName} alt="TinkerHub EMEA"/>
      </div>
    </div>
  );
};

export default Home;
