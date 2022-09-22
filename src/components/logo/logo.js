import { motion } from "framer-motion";
import { React, useRef } from "react";
import logoPic from "./Aback.png";
import styles from "./logo.module.css";
const Logo = () => {
  const windowX = useRef(window.innerWidth);
  const windowY = useRef(window.innerHeight);
  let leftSide = 0;
  window.addEventListener("resize", function () {
    windowX.current = window.innerWidth;
    windowY.current = window.innerHeight;
    // console.log(windowX.current);
    leftSide = windowX.current * -1 - 600;
    console.log(leftSide);
  });
  let con = 0;
  return (
    <motion.div drag>
      <motion.img
        drag
        src={logoPic}
        alt=""
        className={styles.logo}
        whileDrag={{ scale: 1.2 }}
        whileHover={{ scale: 1.2 }}
        dragConstraints={{
          left: -1700,
          right: 0,
          top: -650,
          bottom: 0,
        }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        style={{ zIndex: 10000 }}
      />
    </motion.div>
  );
};

export default Logo;
