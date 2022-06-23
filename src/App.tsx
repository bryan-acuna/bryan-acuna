import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <section>
          <div className="personal">
              <span className="pro">PRO</span>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt=""/>
              <h1 className='name'>Bryan Acuna</h1>
              <p className='country'>USA</p>
              <p className='stack'>Full Stack Developer</p>
              <div className="personal-buttons">
                  <button className="primary">Message</button>
                  <button className="secondary">Following</button>
              </div>
              <div className="social">
                  <a ><i className="fa-brands fa-instagram"></i></a>
                  <a><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/bryanacuna/"><i className="fa-brands fa-linkedin"></i></a>
                  <a><i className="fa-brands fa-twitter"></i></a>
                  <a><i className="fa-brands fa-youtube"></i></a>
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
    </div>
  );
}

export default App;
