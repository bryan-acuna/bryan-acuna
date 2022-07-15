import styles from "../ClassicCars.module.css";

import { useAppSelector } from "../../../hooks";

const ClassicCarsNav = () => {
  const navbarOpen = useAppSelector((state) => state.cars.open);
  const navbarChange = navbarOpen ? `${styles.change}` : "";

  return (
    <nav className={`${navbarChange} ${styles.car__navbar} ${styles.target}`}>
      <a href="#home" className={styles.car__navbar__link}>
        Home
      </a>
      <a href="#popular__cars" className={styles.car__navbar__link}>
        Popular Cars
      </a>
      <a href="#video__gallery" className={styles.car__navbar__link}>
        Video Gallery
      </a>
      <a href="#image__gallery" className={styles.car__navbar__link}>
        Image Gallery
      </a>
      <a href="#contact" className={styles.car__navbar__link}>
        Contact
      </a>
    </nav>
  );
};

export default ClassicCarsNav;
