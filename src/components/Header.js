import React from "react";
import imgLinkedIn from "../assets/linkedin.png";
const Header = () => {
  return (
    <header>
      <div className="container-header">
        <div className="title-header">
          <h1>Julien LEMAITRE</h1>
          <h2>Développeur web full stack !</h2>
          <img src={imgLinkedIn} alt="Portrait Julien" />
        </div>
      </div>
    </header>
  );
};

export default Header;
