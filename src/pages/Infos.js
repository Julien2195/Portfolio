import React, { useRef, useState, useEffect } from "react";
import profilePic from "../assets/picwish.png";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";

const Infos = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);
  return (
    <div id="ancre-infos" ref={targetRef} className="infos">
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
            <p className="alternatif-text">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Le Lorem
              Ipsum est simplement du faux texte employé dans la composition et
              la mise en page avant impression. Le Lorem Ipsum est le faux texte
              standard de l'imprimerie depuis les années 1500, quand un
              imprimeur anonyme assembla.
            </p>
          </div>
          <div className="infos-picture">
            <img src={profilePic} alt="Photo de profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
