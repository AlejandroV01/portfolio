import { motion } from "framer-motion";
import { React, useRef } from "react";
import logoPic from "./Aback.png";
import styles from "./logo.module.css";
const Logo = () => {
  const windowX = useRef(window.innerWidth);
  const windowY = useRef(window.innerHeight);

  window.addEventListener("resize", function () {
    windowX.current = window.innerWidth;
    windowY.current = window.innerHeight;
    // console.log(windowX.current);

    console.log(windowX.current);
  });

  //   let con = 0;
  return (
    <motion.div className="container">
      <motion.img
        drag
        src={logoPic}
        alt=""
        className={styles.logo}
        whileDrag={{ scale: 1.2 }}
        whileHover={{ scale: 1.2 }}
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        style={{ zIndex: 10000 }}
      />
    </motion.div>
  );
};

export default Logo;
