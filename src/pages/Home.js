import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "../styles/Home.module.scss";

import { ReactComponent as ScheduleIcon } from "../media/icons/schedule.svg";
import { ReactComponent as LinkIcon } from "../media/icons/link.svg";
import Carousel from "../components/Carousel";
import HighlightCard from "../components/HighlightCard";

import { events, highlights } from "../data/data";
import { mainCoordinators, coordinators } from "../data/data";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import ComingSoon from "../components/ComingSoon";
import HomeHero from "../components/HomeHero";

const tags = ["star night", "dj night", "cultural talk", "Rose day"];

const Home = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section
        className={cx(styles["intro-section"], styles["home-section"])}
        style={{ borderBottom: "1px solid black" }}
      >
        <div className={styles["intro-bg"]}>
          <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
          {/* <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div> */}
        </div>
        <header
          className={cx(styles.introContent, styles.sectionHeader, "container")}
          style={{
            marginInline: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* <h2 className={styles.heading}>
            <span style={{ marginRight: "3ch" }}>BASANT & </span>
            <span className={styles._ar}>III</span>
          </h2>
          <p className={styles.subtitle}>
            Basant is the official alumni reunion of IIT (ISM) Dhanbad. The
            reunion is one of the most emotional times of the institute's
            calendar as the batch that had passed out 50 years back returns to
            the campus to reminisce about their old college memories.
          </p>
          <div className={styles["header-btn-wrapper"]}>
            <NavLink
              to="/gallery"
              className={cx("btn", styles["intro-header-btn"])}
            >
              <span
                className={cx("btn-subtitle", styles["intro-btn-subtitle"])}
              >
                Basant'23
              </span>
              <span className={cx("btn-text", styles["intro-btn-text"])}>
                Gallery
              </span>
              <LinkIcon />
            </NavLink>
          </div> */}
          <HomeHero />
        </header>
      </section>

      {/* <section
        className={cx(styles["home-section"], "container", styles.highlights)}
      >
        <header className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            <span>Highlights</span>
          </h2>
        </header> */}

      {/* <main> */}
      {/* <div className={styles.hlgallery}> */}
      {/* {highlights.map((id) => (
              <HighlightCard user={user} key={id} {...events[id]} />
            ))} */}
      {/* <div className={styles["btn-wrapper"]}>
              <NavLink to="/events" className="btn">
                <span className="btn-subtitle">Events</span>
                <span className="btn-text">
                  Full Event
                  <br />
                  Schedule
                </span>
                <ScheduleIcon />
              </NavLink>
            </div> */}
      {/* </div> */}
      {/* <ComingSoon /> */}
      {/* </main> */}
      {/* </section> */}

      <section className={cx(styles["home-section"], styles.coordinators)}>
        <header className={cx(styles.sectionHeader, "container")}>
          <h2 className={styles.heading}>
      {/* <span style={{ marginRight: "3ch" }}>Our</span>
      <span className={styles._ar}>Team</span> */}
      Our Team
          </h2>
          <div className={cx(styles.subtitle, "container")} id="coordinatorsList">
                  {/* <ul>
                    {coordinators
                      .filter((val, i) => i <= 22)
                      .map((val) => (
                        <li key={val.name}> {val.name}</li>
                      ))}
                  </ul>
                  <ul>
                    {coordinators
                      .filter((val, i) => i > 22)
                      .map((val) => (
                        <li key={val.name}> {val.name}</li>
                      ))}
                  </ul> */}
      </div>
        </header>
        <main>
      <Carousel cardsList={mainCoordinators} />
      <Carousel cardsList={mainCoordinators} />
      <Carousel cardsList={mainCoordinators} />
      {/* <ComingSoon /> */}
        </main>
      </section>

      <section
        style={{
          height: "120vh",
          backgroundColor: "#00070D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ComingSoon theme="light" />
      </section>
    </motion.div>
  );
};

export default Home;
