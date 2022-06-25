import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const front_end_techs = ["HTML", "JS", "Angular", "React", "CSS", "Vue"];
export const back_end_techs = ["Java", "Python", "Mongo", "Node", "MySQL"];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__cards">
        <div className="experience__frontend experience__card">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {front_end_techs.map((tech) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{tech}</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend experience__card">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {back_end_techs.map((tech) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{tech}</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
