import CTA from "./CTA";
import ME from "../../assets/moose.jpg";
import HeaderSocials from "./HeaderSocials";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h5>Hello I'm</h5>
        <h1>Bryan Acuna</h1>
        <h5 className={styles.text__light}>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className={styles.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
