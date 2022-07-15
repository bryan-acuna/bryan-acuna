import styles from "../ClassicCars.module.css";
import { useAppSelector } from "../../../hooks";

const ContactUs = () => {
  const isChange = useAppSelector((state) => state.cars.open);
  const sectionChange = isChange ? `${styles.change}` : "";
  return (
    <section
      id="contact"
      className={`${sectionChange} ${styles.cars__section} ${styles.cars__section__5} ${styles.target}`}
    >
      <h1 className={`${styles.cars__section__heading}`}>Contact Us</h1>
      <form action="" className={styles.cars_contact_form}>
        <input
          type="text"
          className={styles.cars__form__input}
          placeholder="Your Full Name"
        />
        <input
          className={styles.cars__form__input}
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className={styles.cars__form__input}
          placeholder="Enter Message"
        ></textarea>
        <button type="submit" className={styles.cars__form__button}>
          Submit
        </button>
      </form>
      <p className={styles.cars__copyright}>
        Copyright &copy; CodeAndCreate All Rights Reserved
      </p>
    </section>
  );
};

export default ContactUs;
