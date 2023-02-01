import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiFeedly } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/julien-lemaitre-b119a224a/",
              }}
              target="_blank"
            ></Link>
            <BsLinkedin />
          </li>
          <Link
            to={{ pathname: "https://github.com/Julien2195" }}
            target="_blank"
          >
            <li>
              <BsGithub />
            </li>
          </Link>
        </ul>
        <span>© 2023 Julien LEMAITRE, Tous droits réservés.</span>
      </div>
    </footer>
  );
};

export default Footer;
