import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiFeedly } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/julien-lemaitre-b119a224a/">
              <BsLinkedin />
            </a>
          </li>
          <li className="github">
            <a href="https://github.com/Julien2195">
              <BsGithub />
            </a>
          </li>
        </ul>
        <span>© 2023 Julien LEMAITRE, Tous droits réservés.</span>
      </div>
    </footer>
  );
};

export default Footer;
