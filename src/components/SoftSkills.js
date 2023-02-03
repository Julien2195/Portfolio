import React from "react";
import idea from "../assets/idea.png";
import team from "../assets/team.png";
import veille from "../assets/veille.png";
import resolving from "../assets/resolve.png";
const SoftSkills = () => {
  return (
    <div className="soft-skills">
      <div className="skills-container">
        <div className="skill-box">
          <img src={team} alt="equipe" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odit
            iure dolor similique maxime facilis velit consequatur natus
            exercitationem modi quo nobis, id, ab voluptate fugit commodi
            assumenda hic ducimus.
          </p>
        </div>
        <div className="skill-box">
          <img src={idea} alt="equipe" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odit
            iure dolor similique maxime facilis velit consequatur natus
            exercitationem modi quo nobis, id, ab voluptate fugit commodi
            assumenda hic ducimus.
          </p>
        </div>
        <div className="skill-box">
          <img src={veille} alt="equipe" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odit
            iure dolor similique maxime facilis velit consequatur natus
            exercitationem modi quo nobis, id, ab voluptate fugit commodi
            assumenda hic ducimus.
          </p>
        </div>
        <div className="skill-box">
          <img src={resolving} alt="equipe" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odit
            iure dolor similique maxime facilis velit consequatur natus
            exercitationem modi quo nobis, id, ab voluptate fugit commodi
            assumenda hic ducimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
