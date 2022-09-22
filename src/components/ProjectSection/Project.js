import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import pic1 from "./algo.PNG";
import pic4 from "./country.PNG";
import pic3 from "./dictionary.PNG";
import pic2 from "./pokemon.PNG";
import "./Project.css";
const Project = () => {
  const rightProjectAnimation = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const leftProjectAnimation = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const headerAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="projects">
      <a name="toProjects" href=" " className="anchor">
        a
      </a>
      <motion.h1
        className="project-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerAnimation}
      >
        PROJECTS
      </motion.h1>
      {/* project with image on left side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rightProjectAnimation}
        className="project-div project1"
      >
        <a
          href="https://algo-saurus.web.app/"
          className="project-image-div picture-left"
          target="_blank"
          rel="noreferrer"
        >
          <img src={pic1} alt="" className="project-image" />
          <div className="overlay"></div>
        </a>
        <div className="project-information info-right">
          <h1>
            <a
              href="https://algo-saurus.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              AlgoSaurus
            </a>
          </h1>
          <div className="project-description desc-right">
            <p className="pProject">
              AlgoSaurus implements all the most used sorting algorithms and
              visualizes them in a chart that has live animated sorting. Users
              can also add more bars in the chart to sort and make the algorithm
              go faster or slower to further help the user visualize exactly
              what is going on. Information is also displayed on each algorithm
              which gives a description of how the algorithms work.
            </p>
          </div>
          <div className="project-skills  inverseFlex">
            <p className="noMargin">Firebase</p>
            <p>Algorithms</p>
            <p>API</p>
            <p>React.js</p>
            <p>TypeScript</p>
          </div>
          <div className="links">
            <a
              href="https://github.com/fidel-bello/shellhacks-visualizer"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
            <a
              href="https://algo-saurus.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
          </div>
        </div>
      </motion.div>
      {/* project with image on left side */}
      {/* *************************************** */}
      {/* project with image on right side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={leftProjectAnimation}
        className="project-div project2"
      >
        <a
          href="https://alejandropokemonapi.netlify.app/"
          className="project-image-div picture-right"
          target="_blank"
          rel="noreferrer"
        >
          <img src={pic2} alt="" className="project-image" />
          <div className="overlay"></div>
        </a>
        <div className="project-information info-left">
          <h1>
            <a
              href="https://alejandropokemonapi.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Pokemon API
            </a>
          </h1>
          <div className="project-description desc-left">
            <p>
              This Pokemon API searches through over 800 pokemons to display to
              the user. This projects uses an extensive API which has a myriad
              of information on each pokemon. The user can either choose to
              search for a pokemon of their liking, or generate one at random.
            </p>
          </div>
          <div className="project-skills">
            <p>JavaScript</p>
            <p>React.js</p>
            <p>API</p>
            <p>VS Code</p>
          </div>
          <div className="links">
            <a
              href="https://github.com/AlejandroV01/pokemonAPI"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
            <a
              href="https://alejandropokemonapi.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
          </div>
        </div>
      </motion.div>
      {/* project with image on right side */}
      {/* project with image on left side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rightProjectAnimation}
        className="project-div project3"
      >
        <a
          href="https://alejandrodictionaryapi.netlify.app/"
          className="project-image-div picture-left"
          target="_blank"
          rel="noreferrer"
        >
          <img src={pic3} alt="" className="project-image" />
          <div className="overlay"></div>
        </a>
        <div className="project-information info-right">
          <h1>
            <a
              href="https://alejandrodictionaryapi.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Dictionary
            </a>
          </h1>
          <div className="project-description desc-right">
            <p className="pProject">
              A simple yet educational web app which displays various
              information on an input of a word. This web app returns to the
              user the definition of the word, the part of speech, and an audio
              of how to pronounce the word.
            </p>
          </div>
          <div className="project-skills  inverseFlex">
            <p className="noMargin">VS Code</p>
            <p>Sound</p>
            <p>API</p>
            <p>React.js</p>
            <p>JavaScript</p>
          </div>
          <div className="links">
            <a
              href="https://github.com/AlejandroV01/DictionaryAPI"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
            <a
              href="https://alejandrodictionaryapi.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
          </div>
        </div>
      </motion.div>
      {/* project with image on left side */}
      {/* project with image on right side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={leftProjectAnimation}
        className="project-div project4"
      >
        <a
          href="https://alejandrocountryapi.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project-image-div picture-right"
        >
          <img src={pic4} alt="" className="project-image" />
          <div className="overlay"></div>
        </a>
        <div className="project-information info-left">
          <h1>
            <a
              href="https://alejandrocountryapi.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Country API
            </a>
          </h1>
          <div className="project-description desc-left">
            <p>
              This project displays to users multiple information about a
              country to the user. Using a massive API, data like a country's
              flag, coat of arms, capital, continent, population, languages, and
              currencies will all be grabbed and displayed to users in a custom
              layout.
            </p>
          </div>
          <div className="project-skills">
            <p>JavaScript</p>
            <p>React.js</p>
            <p>API</p>
            <p>VS Code</p>
          </div>
          <div className="links">
            <a
              href="https://github.com/AlejandroV01/CountryAPI"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
            <a
              href="https://alejandrocountryapi.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className="fontawesomeProject"
              />
            </a>
          </div>
        </div>
      </motion.div>
      {/* project with image on right side */}
    </div>
  );
};

export default Project;
