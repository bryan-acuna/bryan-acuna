import styles from "./Header.module.css";
const CTA = () => (
  <div className={styles.cta}>
    <a href="/" className="btn">
      Download CV
    </a>
    <a href="#contact" className="btn btn-primary">
      Let's talk
    </a>
  </div>
);

export default CTA;
