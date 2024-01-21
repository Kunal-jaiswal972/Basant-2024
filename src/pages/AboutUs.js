import styles from "../styles/Home.module.scss";
import stylesB from "../styles/AboutUs.module.scss";
import cx from "classnames";
import { coConvenorMessage, convenorMessage } from "../data/data";
// import { convenor } from "/media/coordinators/joni.jpg";

const AboutUs = () => {
  return (
    <div>
      <header
        className={cx("page-header", styles["page-header"], stylesB.center)}
      >
        <h1 className={stylesB.heading}>
          <span>About Us</span>
        </h1>
      </header>
      <section className={stylesB.container} id="convenor">
        <h3 className={stylesB.title}>
          <span>Convenor's Message</span>
        </h3>
        <div className={stylesB.introContainer}>
          <div className={stylesB.imageContainer}>
            <img
              src="/media/basant-2024/convenor.jpg"
              alt="convenor"
              className={stylesB.roundedCircle}
            />
          </div>
          <div className={stylesB.detailsContainer}>
            <h5 align="center">
              Prof Sushanta Sarangi
              <br />
              Convener, Basant'24
              <br />
              Department of Applied Geology
              <br />
            </h5>
          </div>
        </div>
        <div className={stylesB.textContainer}>{convenorMessage}</div>
      </section>
      <section className={stylesB.container} id="coConvenor">
        <h3 className={stylesB.title2}>
          <span>Co-Convenor's Message</span>
        </h3>
        <div className={stylesB.introContainer}>
          <div className={stylesB.imageContainer}>
            <img
              src="/media/basant-2024/co-convenor.jpg"
              alt="convenor"
              className={stylesB.roundedCircle}
            />
          </div>
          <div className={stylesB.detailsContainer}>
            <h5 align="center">
              Prof Vinay Kumar Rajak
              <br />
              Co-Convener, Basant'24
              <br />
              Department of Petroleum Engineering <br />
            </h5>
          </div>
        </div>
        <div className={stylesB.textContainer}>{coConvenorMessage}</div>
      </section>
    </div>
  );
};

export default AboutUs;

//  <div className="gradient-outline-rounded-copied">
//               <img
//                 className="rounded-circle"
//                 src={Gauri}
//                 alt={"Prof. Gauri Shankar"}
//               />
//             </div>
//             <h5 align="center" className="prof">
//               Prof. Gauri Shankar
//               <br />
//               Convener, Srijan'23
//               <br />
//               Dept. of Electrical Engg. IIT (ISM) Dhanbad
//               <br />
//             </h5>
//           </div>
