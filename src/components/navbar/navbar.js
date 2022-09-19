import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import "./navbar.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  console.log(showMenu);
  return (
    <div className="containerOfNav">
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
        <div className="hamburgerDiv" onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="socials flex">
          <a
            href="https://github.com/AlejandroV01"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="fontawesome"
            />
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
      {showMenu ? (
        <>
          <div className="burgerMenuDiv">
            <a href="#toHome">
              <h3>HOME</h3>
            </a>
            <a href="#toProjects">
              <h3>PROJECTS</h3>
            </a>
            <a href="#toAbout">
              <h3>ABOUT</h3>
            </a>
            <a href="#toContact">
              <h3>CONTACT</h3>
            </a>
          </div>
        </>
      ) : (
        <h1> </h1>
      )}
    </div>
  );
};

export default Nav;
