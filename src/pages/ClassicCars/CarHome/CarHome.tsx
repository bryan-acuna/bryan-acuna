import styles from "../ClassicCars.module.css";
import { useAppSelector } from "../../../hooks";
import carImage from "../../../assets/car/car-section1.png";

const CarHome = () => {
  const isChange = useAppSelector((state) => state.cars.open);
  const sectionChange = isChange ? `${styles.change}` : "";

  return (
    <section
      id="home"
      className={`${sectionChange} ${styles.cars__section} ${styles.cars__section__1} ${styles.target}`}
    >
      <h1
        className={`${styles.cars__section__heading} ${styles.cars__section__1__heading}`}
      >
        Classic Cars
      </h1>
      <img className={styles.cars__section__1__img} src={carImage} alt="" />
    </section>
  );
};

export default CarHome;
