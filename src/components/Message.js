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
              src="/media/basant-2024/convenor.jpg"
              alt="convenor"
              className={styles.roundedCircle}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h5 align="center">
              <b style={{ fontWeight: "700" }}>Prof Sushanta Sarangi</b>
              <br />
              <i style={{ fontWeight: "200" }}>Convener, Basant'24</i>
              <br />
              <small style={{ fontWeight: "200" }}>
                Department of Applied Geology
              </small>
              <br />
            </h5>
          </div>
        </div>
        <div className={styles.textContainer}>
          <span>{convenorMessage}</span>
          <NavLink to="/about-us" className={styles.readMoreButton}>
            Read More
          </NavLink>
        </div>
      </div>
      <div className={cx(styles.container, styles.reverse)}>
        <div className={styles.introContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/media/basant-2024/co-convenor.jpg"
              alt="convenor"
              className={styles.roundedCircle}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h5 align="center">
              <b style={{ fontWeight: "700" }}>Prof Vinay Kumar Rajak</b>
              <br />
              <i style={{ fontWeight: "200" }}>Co-Convener, Basant'24</i>
              <br />
              <small style={{ fontWeight: "200" }}>
                Department of Petroleum Engineering
              </small>
              <br />
            </h5>
          </div>
        </div>
        <div className={styles.textContainer}>
          <span>{coConvenorMessage}</span>
          <NavLink to="/about-us" className={styles.readMoreButton}>
            Read More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Message;
