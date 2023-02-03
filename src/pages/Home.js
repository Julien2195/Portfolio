import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import Portfolio from "./Portfolio";
import Competences from "./Competences";
import Infos from "./Infos";
import Contact from "./Contact";
import Footer from "./Footer";
import SoftSkills from "../components/SoftSkills";

const Home = () => {
  return (
    <div>
      <ScrollIndicator />
      <Header />
      <Infos />
      <Competences />
      <SoftSkills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
