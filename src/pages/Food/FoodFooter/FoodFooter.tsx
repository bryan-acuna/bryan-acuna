import styles from "../Food.module.css";
import { FaArrowRight } from "react-icons/fa";

const FoodFooter = () => {
  return (
    <>
      <div className={styles.section__4__text}>
        <h2 className={styles.section__4__heading}>Sign Me Up</h2>
        <p className={styles.section__4__p}>
          be the first to know about new products
        </p>
      </div>
      <form action="" className={styles.signup__form}>
        <input
          type="email"
          className={styles.signup__form__input}
          placeholder="Enter your Email"
        />
        <button className={styles.signup__form__btn} type="submit">
          <FaArrowRight />
        </button>
      </form>
      <p className={styles.copyright}>
        CodeAndCreate &copy; All Rights Reserved
      </p>
    </>
  );
};

export default FoodFooter;
