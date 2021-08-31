import React from "react";
import Style from "./Home.module.css";
const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.a}>
        <div className={Style.btn}>TIME TABLE</div>
        <div className={Style.time}>EMEA COLLEGE KONDOTTY</div>
      </div>
    </div>
  );
};

export default Home;
