import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const liNav = [
    {
      id: 1,
      name: "A propos de moi",
    },
    {
      id: 2,
      name: "Compétence",
    },
    {
      id: 3,
      name: "Dîplome",
    },
    {
      id: 4,
      name: "Portfolio",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];
  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navBar ? "navbar active" : "navbar"} ref={navRef}>
      <div className="nav-container">
        <h1>Julien LEMAITRE</h1>
        <ul className="nav-deskop">
          {liNav.map((x, i) => (
            <li key={i}>{x.name}</li>
          ))}
        </ul>
        <button>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
