import styles from "./ClassicCars.module.css";
import ClassicCarsNav from "./ClassicCarsNav/ClassicCarsNav";
import CarsWrapper from "./CarHome/CarHome";
import PopularCars from "./PopularCars/PopularCars";
import ImageGallery from "./ImageGallery/ImageGallery";
import ContactUs from "./ContactUS/ContactUs";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { openNav } from "../../store/cars/carsSlice";

const ClassicCars = () => {
  const open = useAppSelector((state) => state.cars.open);
  const dispatch = useAppDispatch();
  const menuChange = open ? `${styles.change}` : "";

  const closeNav = () => {
    dispatch(openNav(false));
  };

  const onClickMenu = () => {
    if (open) {
      closeNav();
    } else {
      dispatch(openNav(true));
    }
  };
  return (
    <>
      <div
        onClick={onClickMenu}
        className={`${menuChange} ${styles.menu} ${styles.target}`}
      >
        <div
          className={`${menuChange} ${styles.menu__line} ${styles.menu__line__1}`}
        ></div>
        <div
          className={`${menuChange} ${styles.menu__line} ${styles.menu__line__2}`}
        ></div>
      </div>
      <ClassicCarsNav />
      <div onClick={closeNav} className={styles.wrapper}>
        <CarsWrapper />
      </div>
      <div onClick={closeNav} className={styles.wrapper}>
        <PopularCars />
      </div>
      <div onClick={closeNav} className={styles.wrapper}>
        <ImageGallery />
      </div>
      <div onClick={closeNav} className={styles.wrapper}>
        <ContactUs />
      </div>
    </>
  );
};

export default ClassicCars;
