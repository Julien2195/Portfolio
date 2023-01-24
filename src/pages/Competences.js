import React from "react";

const Competences = () => {
  const nameCompetences = [
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
  return (
    <div className="competences-main">
      <div className="competences-container">
        <div className="competences">
          <h3>Compétences</h3>
          <span className="tooltip front">Front-End</span>
          <div className="skills-box">
            {nameCompetences.map((x) => (
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
        <div className="cv">
          <h3>Curriculum vitae</h3>
          <p>CV en cours</p>
        </div>
      </div>
    </div>
  );
};
export default Competences;
