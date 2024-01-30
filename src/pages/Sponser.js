import ComingSoon from "../components/ComingSoon";
import styles from "../styles/Home.module.scss";
import stylesB from "../styles/Sponsors.module.scss"
import { goldSponsorImage, silverSponsorImage, bronzeSponsorImage } from "../data/data";
// Import images with correct paths


import cx from "classnames";

const Events = () => {
  
  return (
    <div>
      <div>
        <header
          className={cx("page-header", styles["page-header"])}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h1 className={stylesB.heading}  >
            <span>Sponsors</span>
          </h1>
        </header>
      </div>

      <div className="gold">
      <h3 className={stylesB.subHeading}>
        <span>Gold Sponsors</span>
      </h3>
      <img src={goldSponsorImage} alt="Gold Sponsor" className={stylesB.sponsorImage} />
    </div>

    <div className="silver">
      <h3 className={stylesB.subHeading}>
        <span>Silver Sponsors</span>
      </h3>
      <img src={silverSponsorImage} alt="Silver Sponsor" className={stylesB.sponsorImage} />
    </div>

    <div className="bronze">
      <h3 className={stylesB.subHeading}>
        <span>Bronze Sponsors</span>
      </h3>
      <img src={bronzeSponsorImage} alt="Bronze Sponsor" className={stylesB.sponsorImage} />
    </div>
    </div>
  );
};


export default Events;
