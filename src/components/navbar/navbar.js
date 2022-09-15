import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./navbar.css";
const nav = () => {
  return (
    <nav className="container scrolled nav">
      <div className="navLeft">
        <a href="/">
          <p className="navBarP">Home</p>
        </a>
        <a href="/">
          <p className="navBarP">Projects</p>
        </a>
        <a href="/">
          <p className="navBarP">About</p>
        </a>
        <a href="/">
          <p className="nav-last navBarP">Contact</p>
        </a>
      </div>
      <div className="socials flex">
        <a
          href="https://github.com/AlejandroV01"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="fontawesome" />
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-vera-996579248/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="fontawesome"
          />
        </a>
        <a
          href="mailto:alexvera0109@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="fontawesome"
          />
        </a>
      </div>
    </nav>
  );
};

export default nav;
