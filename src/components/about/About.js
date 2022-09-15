import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.css";
const About = () => {
  const headerAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className={styles.container}>
      <a name="toAbout" href=" ">
        {" "}
      </a>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={headerAnimation}
        viewport={{ once: true }}
        className={styles.projectTitle}
      >
        About
      </motion.h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLeftSide}>
          <p>
            Hello! My name is Alejandro and I am an aspiring full-stack
            developer! I have been in love with web development ever since I
            made my first WordPress website. After that, building projects from
            zero to hero has been my passion. I also love working with others on
            projects where I have the opportunity to learn more about my craft.
          </p>
          <p>
            Today, I am currently on road to complete my Bachelor's Degree in
            Computer Science as a full-time student while absorbing as much
            knowledge of development as I can. While school is teaching my Java,
            I am teaching myself JavaScript, React.js, Git, SASS, MongoDB,
            Node.js, and much more!
          </p>
          <p>
            In my free time I love to work on personal projects of mine and go
            out to keep a healthy mental mind. I also enjoy going to school
            community events, programming events with Upsilon Pi Epsilon,
            building PC's, and taking my dog on walks.
          </p>
          <p>
            These are a few of the technologies that I have been working on
            recently:
          </p>
          <div className={styles.currentSkills}>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>APIs</li>
            </ul>
            <ul>
              <li>VSCode</li>
              <li>Java</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
        <div className={styles.aboutRightSide}>
          <motion.img
            variants={imageAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={require("../mesmall.png")}
            alt="myImage"
            className={styles.AboutPic}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
