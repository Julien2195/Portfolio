import { useRef, useState, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import videobg from "../assets/videobg2.mp4";
import { TypeAnimation } from "react-type-animation";

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
      <div className="header">
        <div className="overlay">
          <video src={videobg} autoPlay loop muted />
          <div className="videobg-container">
            <TypeAnimation
              sequence={[
                "Actuellement à la recherche d'une alternance développeur d'application React",
              ]}
              speed={30}
              cursor={true}
              repeat={0}
              className={"custom-typing"}
            />
          </div>

          <CgMouse onClick={handleClick} className="mouse-down" />
        </div>
      </div>
    </header>
  );
};

export default Header;
