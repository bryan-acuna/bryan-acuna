import styles from "../Food.module.css";
import {
  FaBlenderPhone,
  FaHamburger,
  FaHome,
  FaPizzaSlice,
  FaUtensils,
} from "react-icons/fa";
import { useState } from "react";

const FoodNav = () => {
  const [menu, setMenu] = useState({
    nav: `${styles.food__navbar}`,
    menu: ` ${styles.menu}`,
  });
  const onClickHandler = () => {
    if (menu.menu.includes("menu__active")) {
      setMenu((prevState) => {
        return {
          ...prevState,
          nav: `${styles.food__navbar}`,
          menu: `${styles.menu}`,
        };
      });
    } else {
      setMenu((prevState) => {
        return {
          ...prevState,
          nav: `${styles.food__navbar} ${styles.food__navbar__active}`,
          menu: `${styles.menu} ${styles.menu__active}`,
        };
      });
    }
  };

  return (
    <>
      <nav className={menu.nav}>
        <a href="#main" className={styles.food__navbar__link}>
          <FaHome className={styles.food__navbar__link__icon} />
          <span>Home</span>
        </a>
        <a href="#meals" className={styles.food__navbar__link}>
          <FaUtensils className={styles.food__navbar__link__icon} />
          <span>Meals</span>
        </a>
        <a href="#main" className={styles.food__navbar__link}>
          <FaHamburger className={styles.food__navbar__link__icon} />
          <span>Burger</span>
        </a>
        <a href="#main" className={styles.food__navbar__link}>
          <FaPizzaSlice className={styles.food__navbar__link__icon} />
          <span>Pizza</span>
        </a>
        <a href="#contact" className={styles.food__navbar__link}>
          <FaBlenderPhone className={styles.food__navbar__link__icon} />
          <span>Contact</span>
        </a>
      </nav>
      <div onClick={onClickHandler} className={menu.menu}></div>
    </>
  );
};

export default FoodNav;
