import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import AOS from "aos";
import Timeline from "../components/Timeline";
const Competences = () => {
  const nameCompetencesFront = [
    {
      id: 1,
      name: "HTML",
      percent: 90,
    },
    {
      id: 2,
      name: "CSS",
      percent: 90,
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      percent: 70,
    },
    {
      id: 4,
      name: "REACT",
      percent: 65,
    },
    {
      id: 5,
      name: "WORDPRESS",
      percent: 50,
    },
  ];
  const nameCompetencesBack = [
    {
      id: 1,
      name: "NODE",
      percent: 70,
    },
    {
      id: 2,
      name: "EXPRESS",
      percent: 65,
    },
    {
      id: 3,
      name: "PHP",
      percent: 30,
    },
  ];
  const nameCompetencesSoft = [
    {
      id: 1,
      name: "HTML",
      percent: 90,
    },
    {
      id: 2,
      name: "CSS",
      percent: 90,
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      percent: 70,
    },
    {
      id: 4,
      name: "REACT",
      percent: 65,
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  AOS.init();
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);
  return (
    <div className="competences-container">
      <h3>Compétences</h3>
      <div className="competences-main" ref={ref}>
        {isVisible && (
          <div className="competences">
            {/* ////////////FRONTEND//////////// */}

            <div className="front-container">
              <div
                className="aos-flip"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <div className="skills-box">
                  <h4>Front end </h4>
                  {nameCompetencesFront.map((x) => (
                    <div key={x.name} className="box">
                      <span className="title">{x.name}</span>

                      <div className="skill-bar">
                        <span
                          className={`skill-per ${x.name.toLocaleLowerCase()}`}
                        >
                          <span className="tooltip">{`${x.percent}%`}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* //////////BACKEND///////////// */}

            <div className="back-container">
              <div
                className="aos-flip"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <div className="skills-box">
                  <h4>Back end </h4>
                  {nameCompetencesBack.map((x) => (
                    <div key={x.name} className="box">
                      <span className="title">{x.name}</span>

                      <div className="skill-bar">
                        <span
                          className={`skill-per ${x.name.toLocaleLowerCase()}`}
                        >
                          <span className="tooltip">{`${x.percent}%`}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="cv-container">
          <Timeline />
        </div>
      </div>
    </div>
  );
};
export default Competences;
