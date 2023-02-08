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
      <div id="target-infos"></div>
      <div className="container-infos">
        <h4>Qui suis je ?</h4>
        <div className="infos-description">
          <div ref={ref}>
            <p>
              Bonjour, <br />
              je suis Julien, développeur web junior! Après avoir travaillé dans
              différents domaines, j'ai décidé d'entreprendre une reconversion
              professionnelle. <br />
              D'abord en autodidacte pour apprendre le html/css j'ai poursuivi
              sur une formation développeur web RNCP 5 avec Openclassrooms.
              <br />
              Suite à l'obtention de ce diplôme je souhaite maintenant
              poursuivre mes études en tant que développeur d'application web
              React !
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
