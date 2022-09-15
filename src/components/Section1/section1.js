import { motion } from "framer-motion";
import React from "react";
import "./section1.css";

const section1 = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 25 },
  };

  return (
    <div className="sec1 container">
      <a name="toHome" href=" ">
        {" "}
      </a>
      <motion.div
        className="hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item}>Hi. I'm Alejandro.</motion.h1>
        <motion.h1 variants={item}>An Aspiring Developer.</motion.h1>
        <motion.p variants={item}>
          Building up projects and learning more{" "}
        </motion.p>
        <motion.p variants={item}>about programming is my passion.</motion.p>
      </motion.div>
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default section1;
