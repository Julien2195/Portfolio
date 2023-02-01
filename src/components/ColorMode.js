import { useState } from "react";
import { BsMoonStars, BsSunFill } from "react-icons/bs";

import React from "react";

const ColorMode = ({ darkMode, setDarkMode }) => {
  return (
    <div className="container-mode">
      <span style={{ color: darkMode ? "grey" : "yellow" }}>
        <BsSunFill />
      </span>

      <div className="switch-checkbox">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>
        <BsMoonStars />
      </span>
    </div>
  );
};
export default ColorMode;
