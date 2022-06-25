import "./About.css";
import image from "../../assets/moose.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Card from "./Card";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <Card
              icon={<FaAward className="about__icon" />}
              title="Experience"
              desc="30 years"
            />
            <Card
              icon={<FiUsers className="about__icon" />}
              title="Client"
              desc="30 years"
            />
            <Card
              icon={<VscFolderLibrary className="about__icon" />}
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
