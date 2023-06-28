import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is Younes Kad, Fullstack developer passionate about creating unique and engaging online experiences.
            <br></br> Currently a student at  <Link href="https://www.webacademie.org/" target="_blank" className="link"> Web@cadémie</Link> by Epitech ,
            I am constantly immersed in the fast-evolving world of web development and mobile applications..

          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, as a student specializing in Full Stack development,
            my primary focus lies in creating exceptional solutions that go above and
            beyond expectations and bring utmost satisfaction through our school's projects{" "}
            <Link href="https://epitech.eu" target="_blank" className="link">
              Epitech.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML CSS JS</li>
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Angular</li>
            <li className="about-grid-info-list-item">Laravel</li>
            <li className="about-grid-info-list-item">Symfony</li>
            <li className="about-grid-info-list-item">WordPress</li>
            <li className="about-grid-info-list-item">CSS , BootStrap , SASS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/younespicture.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
