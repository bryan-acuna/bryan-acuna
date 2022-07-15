import styles from "../ClassicCars.module.css";
import { useAppSelector } from "../../../hooks";
import img1 from "../../../assets/car/gallery-car-1.jpg";
import img2 from "../../../assets/car/gallery-car-2.jpg";
import img3 from "../../../assets/car/gallery-car-3.jpg";
import img4 from "../../../assets/car/gallery-car-4.jpg";
import img5 from "../../../assets/car/gallery-car-5.jpg";
import img6 from "../../../assets/car/gallery-car-6.jpg";

const ImageGallery = () => {
  const isChange = useAppSelector((state) => state.cars.open);
  const sectionChange = isChange ? `${styles.change}` : "";
  return (
    <section
      id="image__gallery"
      className={`${sectionChange} ${styles.cars__section} ${styles.cars__section__4} ${styles.target}`}
    >
      <h1 className={`${styles.cars__section__heading}`}>Image Gallery</h1>
      <div className={styles.car__gallery}>
        <div className={styles.car__section__image__wrapper}></div>
        <img className={styles.car__section__image__1} src={img1} alt="" />
        <img className={styles.car__section__image__2} src={img2} alt="" />
        <img className={styles.car__section__image__3} src={img3} alt="" />
      </div>
      <div className={styles.car__gallery}>
        <div className={styles.car__section__image__wrapper}></div>
        <img className={styles.car__section__image__1} src={img4} alt="" />
        <img className={styles.car__section__image__2} src={img5} alt="" />
        <img className={styles.car__section__image__3} src={img6} alt="" />
      </div>
    </section>
  );
};

export default ImageGallery;
