import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ColorMode from "./ColorMode";
const Navbar = ({ darkMode, setDarkMode }) => {
  ////////////////////////////////////////////////
  const targetRef = useRef(null);
  const targetRefCompetences = useRef(null);
  const targetRefPortfolio = useRef(null);
  const targetRefContact = useRef(null);

  function handleClick() {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleClick2() {
    targetRefCompetences.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleClick3() {
    targetRefPortfolio.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleClick4() {
    targetRefContact.current.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    targetRef.current = document.getElementById("target-infos");
  }, []);

  useEffect(() => {
    targetRefCompetences.current =
      document.getElementById("target-competences");
  }, []);
  useEffect(() => {
    targetRefPortfolio.current = document.getElementById("target-portfolio");
  }, []);
  useEffect(() => {
    targetRefContact.current = document.getElementById("target-contact");
  }, []);
  /////////////////////////////////////////////
  const [navBar, setNavBar] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  const navRef = useRef();

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navBar ? "navbar active" : "navbar"} ref={navRef}>
      <div className="nav-container">
        <h1>Julien LEMAITRE</h1>
        <ul className="nav-deskop">
          <li onClick={handleClick}>A propos de moi</li>
          <li onClick={handleClick2}>Compétences</li>
          <li onClick={handleClick3}>Portfolio</li>
          <li onClick={handleClick4}>Contact</li>
          <ColorMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </ul>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? <FaTimes /> : <FaBars />}
        </button>
        {isActive ? (
          <div className="container-responsive">
            <li className="responsive-menu" onClick={handleClick}>
              A propos de moi
            </li>
            <li className="responsive-menu" onClick={handleClick2}>
              Compétences
            </li>
            <li className="responsive-menu" onClick={handleClick3}>
              Portfolio
            </li>
            <li className="responsive-menu" onClick={handleClick4}>
              Contact
            </li>
            <li>
              <ColorMode darkMode={darkMode} setDarkMode={setDarkMode} />
            </li>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
