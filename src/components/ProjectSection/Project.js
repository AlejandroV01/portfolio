import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import pic1 from './algo.PNG'
import pic3 from './firechat.PNG'
import pic2 from './gamedeal.PNG'
import pic4 from './pokemon.PNG'
import './Project.css'
const Project = () => {
  const rightProjectAnimation = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  }
  const leftProjectAnimation = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  }
  const headerAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  let windowX = window.screen.availWidth

  // {windowX < 450 ? <h1>Below 450</h1> : <h1>Other</h1>}
  return (
    <div className='projects'>
      <a name='toProjects' href=' ' className='anchor'>
        {' '}
      </a>
      <motion.h1 className='project-title' initial='hidden' whileInView='visible' viewport={{ once: true }} variants={headerAnimation}>
        PROJECTS
      </motion.h1>
      {/* project with image on left side */}
      {windowX <= 450 ? (
        <div className='project-div project1'>
          <a href='https://algo-saurus.web.app/' className='project-image-div picture-left' target='_blank' rel='noreferrer' name='Link to Website'>
            <img src={pic1} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-right'>
            <h1>
              <a href='https://algo-saurus.web.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                AlgoSaurus
              </a>
            </h1>
            <div className='project-description desc-right'>
              <p className='pProject'>
                AlgoSaurus is a collaborative Hackathon project made at ShellHacks 2022 and placed 3rd Overall. AlgoSaurus implements all the most
                used sorting algorithms and visualizes them with live animated sorting. Users can visualize the algorithms go faster or slower to
                further help visualize exactly what is going on.
              </p>
            </div>
            <div className='project-skills  inverseFlex'>
              <p className='noMargin'>Firebase</p>
              <p>Algorithms</p>
              <p>API</p>
              <p>React.js</p>
              <p className='noMarginv2'>TypeScript</p>
            </div>
            <div className='links'>
              <a href='https://github.com/fidel-bello/shellhacks-visualizer' target='_blank' rel='noreferrer' name='Link to GitHub Repo'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://algo-saurus.web.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <motion.div initial='hidden' whileInView='visible' variants={rightProjectAnimation} className='project-div project1'>
          <a href='https://algo-saurus.web.app/' className='project-image-div picture-left' target='_blank' rel='noreferrer' name='Link to Website'>
            <img src={pic1} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-right'>
            <h1>
              <a href='https://algo-saurus.web.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                AlgoSaurus
              </a>
            </h1>
            <div className='project-description desc-right'>
              <p className='pProject'>
                AlgoSaurus is a collaborative Hackathon project made at ShellHacks 2022 and placed 3rd Overall. AlgoSaurus implements all the most
                used sorting algorithms and visualizes them with live animated sorting. Users can visualize the algorithms go faster or slower to
                further help visualize exactly what is going on.
              </p>
            </div>
            <div className='project-skills  inverseFlex'>
              <p className='noMargin'>Firebase</p>
              <p>Algorithms</p>
              <p>API</p>
              <p>React.js</p>
              <p className='noMarginv2'>TypeScript</p>
            </div>
            <div className='links'>
              <a href='https://github.com/fidel-bello/shellhacks-visualizer' target='_blank' rel='noreferrer' name='Link to GitHub Repo'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://algo-saurus.web.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* project with image on left side */}
      {/* *************************************** */}
      {/* project with image on right side */}
      {windowX <= 450 ? (
        <div className='project-div project2'>
          <a href='https://gamedeal.netlify.app/' className='project-image-div picture-right' target='_blank' rel='noreferrer' name='Link to Website'>
            <img src={pic2} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-left'>
            <h1>
              <a href='https://gamedeal.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                GameDeals
              </a>
            </h1>
            <div className='project-description desc-left'>
              <p>
                I created GameDeals as a way to easily see any games that are on sale. This project uses a CheapSharkAPI as well as various sort
                methods and algorithms to display only the best deals to the user. There is also a search section which can take in various filters to
                refine the users search.
              </p>
            </div>
            <div className='project-skills'>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Axios</p>
              <p>RSuite</p>
            </div>
            <div className='links'>
              <a href='https://https://github.com/AlejandroV01/GameDeals-App' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://gamedeal.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: true }}
          variants={leftProjectAnimation}
          className='project-div project2'
        >
          <a href='https://gamedeal.netlify.app/' className='project-image-div picture-right' target='_blank' rel='noreferrer' name='Link to Website'>
            <img src={pic2} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-left'>
            <h1>
              <a href='https://gamedeal.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                GameDeals
              </a>
            </h1>
            <div className='project-description desc-left'>
              <p>
                I created GameDeals as a way to easily see any games that are on sale. This project uses a CheapSharkAPI as well as various sort
                methods and algorithms to display only the best deals to the user. There is also a search section which can take in various filters to
                refine the users search.
              </p>
            </div>
            <div className='project-skills'>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Axios</p>
              <p>RSuite</p>
            </div>
            <div className='links'>
              <a href='https://https://github.com/AlejandroV01/GameDeals-App' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://gamedeal.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* project with image on right side */}
      {/* project with image on left side */}
      {windowX <= 450 ? (
        <div className='project-div project3'>
          <a
            href='https://alejandrodictionaryapi.netlify.app/'
            className='project-image-div picture-left'
            target='_blank'
            rel='noreferrer'
            name='Link to Website'
          >
            <img src={pic3} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-right'>
            <h1>
              <a href='https://thefirechat.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                Firechat
              </a>
            </h1>
            <div className='project-description desc-right'>
              <p className='pProject'>
                A project focused around communication. Firechat is a webapp that enables users to chat via channels. Users will be prompted to
                authenticate their account and login in order to chat LIVE.
              </p>
            </div>
            <div className='project-skills  inverseFlex'>
              <p className='noMargin'>VS Code</p>
              <p>Sound</p>
              <p>API</p>
              <p className='marginv2'>React.js</p>
              <p className='noMarginv2'>JavaScript</p>
            </div>
            <div className='links'>
              <a href='https://github.com/AlejandroV01/FireChat' target='_blank' rel='noreferrer' name='Link to GitHub Repo'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://thefirechat.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: true }}
          variants={rightProjectAnimation}
          className='project-div project3'
        >
          <a
            href='https://alejandrodictionaryapi.netlify.app/'
            className='project-image-div picture-left'
            target='_blank'
            rel='noreferrer'
            name='Link to Website'
          >
            <img src={pic3} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-right'>
            <h1>
              <a href='https://thefirechat.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                Firechat
              </a>
            </h1>
            <div className='project-description desc-right'>
              <p className='pProject'>
                A project focused around communication. Firechat is a webapp that enables users to chat via channels. Users will be prompted to
                authenticate their account and login in order to chat LIVE.
              </p>
            </div>
            <div className='project-skills  inverseFlex'>
              <p className='noMargin'>Live Chat</p>
              <p>Authentication</p>
              <p className='marginv2'>Firebase</p>
              <p className='noMarginv2'>React.js</p>
            </div>
            <div className='links'>
              <a href='https://github.com/AlejandroV01/FireChat' target='_blank' rel='noreferrer' name='Link to GitHub Repo'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://thefirechat.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* project with image on left side */}
      {/* project with image on right side */}
      {windowX <= 450 ? (
        <div className='project-div project2'>
          <a
            href='https://alejandropokemonapi.netlify.app/'
            className='project-image-div picture-right'
            target='_blank'
            rel='noreferrer'
            name='Link to Website'
          >
            <img src={pic4} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-left'>
            <h1>
              <a href='https://alejandropokemonapi.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                Pokemon API
              </a>
            </h1>
            <div className='project-description desc-left'>
              <p>
                This Pokemon API searches through over 800 pokemons to display to the user. This projects uses an extensive API which has a myriad of
                information on each pokemon. The user can either choose to search for a pokemon of their liking, or generate one at random.
              </p>
            </div>
            <div className='project-skills'>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>API</p>
              <p>VS Code</p>
            </div>
            <div className='links'>
              <a href='https://github.com/AlejandroV01/pokemonAPI' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://alejandropokemonapi.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: true }}
          variants={leftProjectAnimation}
          className='project-div project2'
        >
          <a
            href='https://alejandropokemonapi.netlify.app/'
            className='project-image-div picture-right'
            target='_blank'
            rel='noreferrer'
            name='Link to Website'
          >
            <img src={pic4} alt='' className='project-image' />
            <div className='overlay'></div>
          </a>
          <div className='project-information info-left'>
            <h1>
              <a href='https://alejandropokemonapi.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                Pokemon API
              </a>
            </h1>
            <div className='project-description desc-left'>
              <p>
                This Pokemon API searches through over 800 pokemons to display to the user. This projects uses an extensive API which has a myriad of
                information on each pokemon. The user can either choose to search for a pokemon of their liking, or generate one at random.
              </p>
            </div>
            <div className='project-skills'>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>API</p>
              <p>VS Code</p>
            </div>
            <div className='links'>
              <a href='https://github.com/AlejandroV01/pokemonAPI' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='fontawesomeProject' />
              </a>
              <a href='https://alejandropokemonapi.netlify.app/' target='_blank' rel='noreferrer' name='Link to Website'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' className='fontawesomeProject' />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* project with image on right side */}
    </div>
  )
}

export default Project
