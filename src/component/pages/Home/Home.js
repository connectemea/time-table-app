import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import BrandName from "../images/TinkerHubLogo.png";
import Departments from "../../const/Departments";
import Semesters from "../../const/Semesters";
import STORAGE_KEYS from "../../const/STORAGE_KEYS";
import { useHistory } from "react-router";
const Home = () => {
  const [department, setDepartment] = useState("0");
  const [semester, setSemester] = useState("0");
  const history = useHistory();

  const Option = ({ name, value }) => (
    <option className={styles.selectOption} value={value}>
      {name}
    </option>
  );
  const handleShowTimeTable = () => {
    localStorage.setItem(STORAGE_KEYS.SEMESTER, semester);
    localStorage.setItem(STORAGE_KEYS.DEPARTMENT, department);
    history.push("/timetable");
  };

  useEffect(() => {
    if (
      localStorage.getItem(STORAGE_KEYS.DEPARTMENT) !== "undefined" &&
      localStorage.getItem(STORAGE_KEYS.SEMESTER) !== "undefined"
    ) {
      setDepartment(localStorage.getItem(STORAGE_KEYS.DEPARTMENT));
      setSemester(localStorage.getItem(STORAGE_KEYS.SEMESTER));
    }
  }, []);
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleSection}>
        <div className={styles.mainTitle}>TIME TABLE</div>
        <div className={styles.subTitle}>EMEA COLLEGE KONDOTTY</div>
      </div>
      <div className={styles.MiddleContent}>
        <div className={styles.LoginBox}>
          <div className={styles.centerDiv}>
            <div className={styles.selectSection}>
              <select
                className={styles.selectBox}
                id="dropdown"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              >
                {Departments &&
                  Departments.map((dep, ind) => (
                    <Option name={dep.name} value={ind} />
                  ))}
              </select>
            </div>
            <div className={styles.selectSection}>
              <select
                className={styles.selectBox}
                id="dropdown"
                onChange={(e) => setSemester(e.target.value)}
                value={semester}
              >
                {Semesters &&
                  Semesters.map((sem, ind) => (
                    <Option value={ind} name={sem.name} />
                  ))}
              </select>
            </div>
            <div className={styles.showBtn}>
              <button className={styles.button} onClick={handleShowTimeTable}>
                Show Timetable
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomTitle}>
        Crafted with&#128150;
        <img
          className={styles.brandName}
          src={BrandName}
          alt="TinkerHub EMEA"
        />
      </div>
    </div>
  );
};

export default Home;
