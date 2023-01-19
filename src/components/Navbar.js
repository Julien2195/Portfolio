import React from "react";

const Navbar = () => {
  const liNav = [
    "A propos de moi",
    "Compétence",
    "Dîplome",
    "Portfolio",
    "Contact",
  ];
  return (
    <nav>
      <div className="nav-container">
        <h1>Julien LEMAITRE</h1>
        <ul>
          {liNav.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
