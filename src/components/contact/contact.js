import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import styles from "./contact.module.css";
const Contact = ({ isVisible }) => {
  const [isPopup, setIsPopup] = useState(false);
  const headerAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const popupAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_KEY}`,
        `${process.env.REACT_APP_TEMPLATE_KEY}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsPopup(true);
    setTimeout(() => {
      setIsPopup(false);
    }, 2000);
  };
  console.log(isPopup);
  return (
    <div className={styles.container}>
      <a name="toContact" href=" ">
        {" "}
      </a>
      <div className={styles.projectTitleDiv}>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={headerAnimation}
          viewport={{ once: true }}
          className="project-title"
        >
          Contact Me
        </motion.h1>
      </div>

      <div className={styles.contactDiv}>
        <div className={isPopup ? styles.popContainer : styles.popContainerOff}>
          <h1 style={{ color: "black" }}>🎉Message Sent🎉</h1>
        </div>
        <div className={styles.leftSide}>
          <div className={styles.bar}>
            <div className={styles.iconDiv}>
              <BsFillTelephoneFill className={styles.icons} />
            </div>
            <h2>305-762-0656</h2>
          </div>
          <div className={styles.bar}>
            <div className={styles.iconDiv}>
              <MdEmail className={styles.icons} />
            </div>
            <h2>alexvera0109@gmail.com</h2>
          </div>

          <div className={styles.bar}>
            <div className={styles.iconDiv}>
              <HiLocationMarker className={styles.icons} />
            </div>
            <h2>Miami, FL</h2>
          </div>
        </div>

        <div className={styles.rightSide}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <label className={styles.labels}>Name</label>
            <input
              className={styles.inputs}
              type="text"
              name="user_name"
              placeholder="Full Name..."
            />
            <label className={styles.labels}>Email</label>
            <input
              className={styles.inputs}
              type="email"
              name="user_email"
              placeholder="example@gmail.com..."
            />
            <label className={styles.labels}>Message</label>
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Send me your thoughts and feedback, I appreciate it"
            />
            <input type="submit" value="Send" className={styles.button} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
