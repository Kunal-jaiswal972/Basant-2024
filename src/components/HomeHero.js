import React from "react";
import styles from "./HomeHero.module.scss";
import logoClr from "../media/Logo_Colour.png";

const HomeHero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1>
          <span>BASANT&III</span>
          <span>2024</span>
        </h1>
        <p>
          Basant is the official alumni reunion of IIT (ISM) Dhanbad. The
          reunion is one of the most emotional times of the institute's calendar
          as the batch that had passed out 50 years back returns to the campus
          to reminisce about their old college memories.
        </p>
        <div className={styles.imageContainer2}>
          <img src={logoClr} alt="Hero Image" />
        </div>
        <button>Register</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={logoClr} alt="Hero Image" />
      </div>
    </div>
  );
};

export default HomeHero;
