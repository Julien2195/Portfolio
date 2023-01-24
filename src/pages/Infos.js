import React, { useRef, useState, useEffect } from "react";
import profilePic from "../assets/picwish.png";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import { CgMouse } from "react-icons/cg";

const Infos = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  function handleClick() {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);
  return (
    <div ref={targetRef} className="infos">
      <div id="target"></div>
      <div className="container-infos">
        <h3>A propos de moi </h3>
        <div className="infos-description">
          <div ref={ref}>
            {isVisible && (
              <TypeAnimation
                speed={60}
                repeat={0}
                style={{ maxWidth: 700, textAlign: "justify" }}
                sequence={[
                  "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla.",
                ]}
              />
            )}
          </div>
          <div className="infos-picture">
            <img src={profilePic} alt="Photo de profil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
