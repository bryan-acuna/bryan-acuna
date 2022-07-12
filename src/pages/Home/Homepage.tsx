import React from "react";
import Nav from "../../components/nav/Nav";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Experience from "../../components/experience/Experience";
import About from "../../components/about/About";
import Header from "../../components/header/Header";

function Homepage() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
