import { motion } from "framer-motion";
import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  return (
    <div className={styles.container}>
      <motion.div
        variants={footerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.insideContainer}
      >
        <h1 className={styles.header}>Hey!</h1>
        <span className={styles.pTag}>
          Looks like you scrolled all the way to the end!
        </span>
        <span className={styles.pTag}>
          Want to go back to a specific section?
        </span>
        <div className={styles.buttons}>
          <a href="#toHome">
            <button>Home</button>
          </a>
          <a href="#toProjects">
            <button>Projects</button>
          </a>
          <a href="#toAbout">
            <button>About</button>
          </a>
          <a href="#toContact">
            <button>Contact</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
