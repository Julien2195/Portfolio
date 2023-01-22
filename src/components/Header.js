import React, { useEffect } from "react";
import { useRef } from "react";
import { CgMouse } from "react-icons/cg";

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
      <div className="container-header">
        <div className="title-header">
          <h1>
            <span>J</span>ulien <span>L</span>EMAITRE
          </h1>
          <h2>
            <span>D</span>éveloppeur <span> w</span>eb <span> f</span>ull
            <span> s</span>tack <span>!</span>
          </h2>
          <CgMouse onClick={handleClick} className="mouse-down" />
        </div>
      </div>
    </header>
  );
};

export default Header;
