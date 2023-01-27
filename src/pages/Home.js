import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import Portfolio from "./Portfolio";
import Competences from "./Competences";
import Infos from "./Infos";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <ScrollIndicator />
      <Navbar />
      <Header />
      <Infos />
      <Competences />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
