import React from "react";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    // <div className={styles.heroSection}>
    //   <div className={styles.textContainer}>
    //     <h1>
    //       <span>BASANT&III</span>
    //       <span>2024</span>
    //     </h1>
    //     <p>
    //       Basant is the official alumni reunion of IIT (ISM) Dhanbad. The
    //       reunion is one of the most emotional times of the institute's calendar
    //       as the batch that had passed out 50 years back returns to the campus
    //       to reminisce about their old college memories.
    //     </p>
    //     <div className={styles.imageContainer2}>
    //       <img src="./media/Logo_Colour.png" alt="Hero Image" />
    //     </div>
    //     <button>Register</button>
    //   </div>
    //   <div className={styles.imageContainer}>
    //     <img src="./media/Logo_Colour.png" alt="Hero Image" />
    //   </div>
    // </div>
    <article className={styles.container}>
      <div className={styles.basantContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>BASANT & III 2024</h1>
          <p>
            Basant is the official alumni reunion of IIT (ISM) Dhanbad. The
            reunion is one of the most emotional times of the institute's
            calendar as the batch that had passed out 50 years back returns to
            the campus to reminisce about their old college memories.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="./media/Logo_Colour.png" alt="Basant Logo" />
        </div>
      </div>
      <div className={styles.iiiContainer}>
        <div className={styles.textContainer}>
          <p>
            Industry Institute Interaction - 2024 (III - 2024) aims to create a
            common platform that brings together the academic and industrial
            communities to share and update their knowledge in the areas of
            Industry 4.0.
          </p>
          <button className={styles.registerBtn}>Register</button>
        </div>
        <div className={styles.imageContainer}>
          <img src="./media/III_logo.jpg" alt="III Logo" />
          <button className={styles.registerBtn2}>Register</button>
        </div>
      </div>
    </article>
  );
};

export default HomeHero;
