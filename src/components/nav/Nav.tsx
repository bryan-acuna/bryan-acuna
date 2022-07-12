import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import styles from "./Nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/#");
  return (
    <nav className={styles.home__nav}>
      <a
        onClick={() => {
          setActiveNav("/#");
        }}
        className={` ${activeNav === "/#" ? styles.home__active : ""}`}
        href="/#"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={` ${activeNav === "#about" ? styles.home__active : ""}`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={` ${activeNav === "#experience" ? styles.home__active : ""}`}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav("#portfolio");
        }}
        className={` ${activeNav === "#portfolio" ? styles.home__active : ""}`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={` ${activeNav === "#contact" ? styles.home__active : ""}`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
