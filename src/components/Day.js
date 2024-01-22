// import SimpleImageSlider from "react-simple-image-slider";
import styles from "./Day.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Day = ({ images }) => {
  return (
    <div className={styles.container}>
      {/* <SimpleImageSlider
        style={{ margin: "0 auto", backgroundPosition:"center"}}
        width={850}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      /> */}
      <Carousel>
        {images.map((image, idx) => (
          <div key={idx}>
            <img src={image.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Day;
