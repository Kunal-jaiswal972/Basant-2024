import ComingSoon from "../components/ComingSoon";
import styles from "../styles/Home.module.scss";
import stylesB from "../styles/Sponsors.module.scss"
import cx from "classnames";

const Events = () => {
  
  return (
    <div>
      <div>
        <header
          className={cx("page-header", styles["page-header"])}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h1 className={stylesB.heading}>
            <span>Sponsors</span>
          </h1>
        </header>
      </div>
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
    </div>
  );
};


export default Events;
