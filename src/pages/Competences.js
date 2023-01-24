import React from "react";

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
    {
      id: 1,
      name: "NODEJS",
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
  return (
    <div className="competences-main">
      <div className="competences-container">
        <div className="competences">
          <h3>Compétences</h3>
          {/* ////////////FRONTEND//////////// */}
          <span className="tooltip front">Hard Skills</span>
          <div className="skills-box">
            {nameCompetencesFront.map((x) => (
              <div className="box">
                <span className="title">{x.name}</span>

                <div className="skill-bar">
                  <span className={`skill-per ${x.name.toLocaleLowerCase()}`}>
                    <span className="tooltip">{`${x.percent}%`}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* //////////BACKEND///////////// */}
          <span className="tooltip back">Soft Skills</span>
          <div className="skills-box">
            {nameCompetencesSoft.map((x) => (
              <div className="box">
                <span className="title">{x.name}</span>

                <div className="skill-bar">
                  <span className={`skill-per ${x.name.toLocaleLowerCase()}`}>
                    <span className="tooltip">{`${x.percent}%`}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CV */}
        <div className="cv-container">
          <h3>Curriculum vitae</h3>
          <div className="cv">
            <span>CV EN COURS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Competences;
