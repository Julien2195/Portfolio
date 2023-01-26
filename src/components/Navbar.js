import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const liNav = [
    {
      id: 1,
      name: "A propos de moi",
      class: "about-nav",
    },
    {
      id: 2,
      name: "Compétences",
      class: "competences-nav",
    },

    {
      id: 3,
      name: "Portfolio",
      class: "portfolio-nav",
    },
    {
      id: 4,
      name: "Contact",
      class: "contact-nav",
    },
  ];
  const changeBackground = () => {
    if (window.scrollY >= 740) {
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
          {liNav.map((x, i) => (
            <li key={i} ref={navRef} className={x.class}>
              {x.name}
            </li>
          ))}
        </ul>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? <FaTimes /> : <FaBars />}
        </button>
        {isActive ? (
          <div className="container-responsive">
            {liNav.map((x, i) => (
              <li className="responsive-menu" key={i}>
                {x.name}
              </li>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
