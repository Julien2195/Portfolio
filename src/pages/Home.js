import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import Portfolio from "./Portfolio";
import Competences from "./Competences";

import Infos from "./Infos";
const Home = () => {
  return (
    <div>
      <ScrollIndicator />
      <Navbar />
      <Header />
      <Infos />
      <Competences />
      <Portfolio />
    </div>
  );
};

export default Home;
