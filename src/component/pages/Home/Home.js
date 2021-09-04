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
      <div>
        <select className={styles.selectBox1} id="dropdown">
          <option value="Select Department">Select Department</option>
          <option value="BSc Computer Science">BSc Computer Science</option>
          <option value="BA Economics">BA Economics</option>
          <option value="B.Com Cop">B.Com</option>
          <option value="BA English">BA English</option>
          <option value="BSc Microbiology">BSc Microbiology</option>
          <option value="BA West Asian Studies">BA West Asian Studies</option>
          <option value="BSc Biotechnology">BSc Biotechnology</option>
          <option value="BSc Biochemistry">BSc Biochemistry</option>
          <option value="BBA">BBA</option>
          <option value="B.Com Computer Application">
            B.Com Computer Application
          </option>
          <option value="BVoc Logistics">BVoc Logistics</option>
          <option value="BVoc Accounting and Taxation">
            BVoc Accounting and Taxation
          </option>
        </select>
      </div>
      <div>
        <select className={styles.selectBox2} id="dropdown">
          <option value="Select Semester">Select Semester</option>
          <option value="1st Sem">1st Sem</option>
          <option value="2nd Sem">2nd Sem</option>
          <option value="3rd Sem">3rd Sem</option>
        </select>
      </div>
      <div>
        <button className={styles.button}>Show Timetable</button>
      </div>
      <div className={styles.bottomTitle}>
        Crafted with&#128150;
        <img className={styles.brandName} src={BrandName} />
      </div>
    </div>
  );
};

export default Home;
