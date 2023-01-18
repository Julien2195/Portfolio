import React from "react";
import Header from "../components/Header";
import ScrollIndicator from "../components/ScrollIndicator";
import Infos from "./Infos";
const Home = () => {
  return (
    <div>
      <ScrollIndicator />
      <Header />
      <Infos />
    </div>
  );
};

export default Home;
