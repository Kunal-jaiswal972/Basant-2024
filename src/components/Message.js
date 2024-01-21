import React from "react";
import styles from "./Message.module.scss";
import cx from "classnames";
import { coConvenorMessage, convenorMessage } from "../data/data";
import { NavLink } from "react-router-dom";

const Message = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/media/coordinators/joni.jpg"
              alt="convenor"
              className={styles.roundedCircle}
            />
          </div>
          {/* <div className={styles.detailsContainer}>
          <h5 align="center">
          Prof. Gauri Shankar
          <br />
          Convener, Basant'24
          <br />
          Dept. of Electrical Engg. IIT (ISM) Dhanbad
          <br />
          </h5>
        </div> */}
        </div>
        <div className={styles.textContainer}>
          {coConvenorMessage.slice(0, 1000)}
          <NavLink to="/about-us" className={styles.readMoreButton}>
            Read More
          </NavLink>
        </div>
      </div>
      <div className={cx(styles.container, styles.reverse)}>
        <div className={styles.introContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/media/coordinators/joni.jpg"
              alt="convenor"
              className={styles.roundedCircle}
            />
          </div>
          {/* <div className={styles.detailsContainer}>
          <h5 align="center">
          Prof. Gauri Shankar
          <br />
          Convener, Basant'24
          <br />
          Dept. of Electrical Engg. IIT (ISM) Dhanbad
          <br />
          </h5>
        </div> */}
        </div>
        <div className={styles.textContainer}>
          {convenorMessage.slice(0, 1000)}
          <NavLink to="/about-us" className={styles.readMoreButton}>
            Read More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Message;
