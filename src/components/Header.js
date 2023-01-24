import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { CgMouse } from "react-icons/cg";
import videobg from "../assets/videobg.mp4";

const Header = () => {
  const targetRef = useRef(null);
  function handleClick() {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    targetRef.current = document.getElementById("target");
  }, []);

  return (
    <header>
      <div className="overlay"></div>
      <video src={videobg} autoPlay loop muted />
      <div className="videobg-container"></div>
      <CgMouse onClick={handleClick} className="mouse-down" />
    </header>
  );
};

export default Header;
