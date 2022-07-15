import "./About.module.css";
import image from "../../assets/moose.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Card from "./Card";
import styles from "./About.module.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={styles.about__container}>
        <div className={styles.about__me}>
          <div className={styles.about__me__image}>
            <img src={image} alt="About" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <Card
              icon={<FaAward className={styles.about__icon} />}
              title="Experience"
              desc="30 years"
            />
            <Card
              icon={<FiUsers className={styles.about__icon} />}
              title="Client"
              desc="30 years"
            />
            <Card
              icon={<VscFolderLibrary className={styles.about__icon} />}
              title="Projects"
              desc="30 years"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut
            blanditiis dolore et, expedita explicabo facilis impedit, itaque
            molestias neque placeat possimus sit sunt totam ut veniam veritatis
            voluptas voluptatibus!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
