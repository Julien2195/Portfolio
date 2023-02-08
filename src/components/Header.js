import { useRef, useEffect } from "react";
import videobgMp4 from "../assets/videobg3.mp4";
import videobgWebm from "../assets/videobg3.webm";
import { TypeAnimation } from "react-type-animation";
import { HiArrowCircleDown } from "react-icons/hi";
const Header = () => {
  const targetRefDown = useRef(null);
  function handleClickDown() {
    targetRefDown.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    targetRefDown.current = document.getElementById("target-infos");
  }, []);

  return (
    <header>
      <div className="header">
        <div className="overlay">
          <video autoPlay loop muted>
            <source src={videobgWebm} type="video/webm" />
            <source src={videobgMp4} type="video/mp4" />
          </video>
          <div className="videobg-container">
            <TypeAnimation
              sequence={[
                "Bienvenue sur mon portfolio.", // Types 'One'
                1000, // Waits 1s
                "Welcome to my portfolio.", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              speed={30}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className={"custom-typing"}
            />
          </div>

          <HiArrowCircleDown onClick={handleClickDown} className="mouse-down" />
        </div>
      </div>
    </header>
  );
};

export default Header;
