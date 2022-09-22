import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { React, useState } from "react";
import "./navbar.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  console.log(showMenu);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="containerOfNav">
      <nav className="container scrolled nav">
        <div className="navLeft">
          <a href="#toHome" name="To Home Button">
            <p className="navBarP">Home</p>
          </a>
          <a href="#toProjects" name="To Projects Button">
            <p className="navBarP">Projects</p>
          </a>
          <a href="#toAbout" name="To About Button">
            <p className="navBarP">About</p>
          </a>
          <a href="#toContact" name="To Contact Button">
            <p className="nav-last navBarP">Contact</p>
          </a>
        </div>
        <div className="hamburgerDiv" onClick={handleShowMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="socials flex">
          <a
            href="https://github.com/AlejandroV01"
            target="_blank"
            rel="noreferrer"
            name="To Github Page"
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
            name="To Linkedin Page"
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
            name="To Sending An Email"
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
          <motion.div
            className="burgerMenuDiv"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.a href="#toHome" variants={item} onClick={handleShowMenu}>
              <h3>HOME</h3>
            </motion.a>
            <motion.a
              href="#toProjects"
              variants={item}
              onClick={handleShowMenu}
            >
              <h3>PROJECTS</h3>
            </motion.a>
            <motion.a href="#toAbout" variants={item} onClick={handleShowMenu}>
              <h3>ABOUT</h3>
            </motion.a>
            <motion.a
              href="#toContact"
              variants={item}
              onClick={handleShowMenu}
            >
              <h3>CONTACT</h3>
            </motion.a>
          </motion.div>
        </>
      ) : (
        <h1> </h1>
      )}
    </div>
  );
};

export default Nav;
