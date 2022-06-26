import "./Portfolio.css";

import IMG1 from "../../assets/anete-lusina-zwsHjakE_iI-unsplash.jpg";
import IMG2 from "../../assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";
import IMG3 from "../../assets/joanna-kosinska-LAaSoL0LrYs-unsplash.jpg";
import IMG4 from "../../assets/lee-campbell-DtDlVpy-vvQ-unsplash.jpg";
import IMG5 from "../../assets/joshua-aragon-BMnhuwFYr7w-unsplash.jpg";
import IMG6 from "../../assets/thought-catalog-505eectW54k-unsplash.jpg";

export const data = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Project 1",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Project 2",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Project 3",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Project 4",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Project 5",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Project 6",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((project) => (
          <article key={project.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a className="btn" href={project.github}>
                Github
              </a>
              <a className="btn btn-primary" href={project.demo}>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
