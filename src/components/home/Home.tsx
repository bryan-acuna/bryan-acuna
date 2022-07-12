import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={`${styles.home__section} ${styles.personal}`}>
        <div className={styles.pro}>
          <span className={styles.pro}>PRO</span>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
          />
          <h1 className={styles.name}>Bryan Acuna</h1>
          <p className={styles.country}>USA</p>
          <p className={styles.stack}>Full Stack Developer</p>
          <div className={styles.personalButtons}>
            <button className={styles.primary}>Message</button>
            <button className={styles.secondary}>Following</button>
          </div>
          <div className={styles.social}>
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/bryanacuna/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul className="Skills-list">
            <li>Angular</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
