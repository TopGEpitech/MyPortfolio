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
          ref={ref}
      >
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-grid-info">
            <p className="about-grid-info-text">
              I'm a Fullstack Developer with a Master Degree from{' '}
              <Link href="https://epitech.eu" target="_blank" className="link">
                EPITECH
              </Link>. <br></br> I help businesses achieve digital transformation and create high-performance websites.
            </p>
            <p className="about-grid-info-text">
              Core skills :
            </p>
            <ul className="about-grid-info-list">
              <li className="about-grid-info-list-item">TypeScript</li>
              <li className="about-grid-info-list-item">PHP</li>
              <li className="about-grid-info-list-item">Python / C#</li>
              <li className="about-grid-info-list-item">Node.js</li>
              <li className="about-grid-info-list-item">Angular</li>
              <li className="about-grid-info-list-item">Next.js</li>
              <li className="about-grid-info-list-item">CSS/HTML</li>
              <li className="about-grid-info-list-item">Front-End</li>
              <li className="about-grid-info-list-item">Back-end</li>
            </ul>
            <p className="about-grid-info-text">Soft skills:</p>
            <ul className="about-grid-info-list">
              <li className="about-grid-info-list-item">Presentation</li>
              <li className="about-grid-info-list-item">Analytical Thinking</li>
              <li className="about-grid-info-list-item">Problem-Solving</li>
              <li className="about-grid-info-list-item">Attention to Quality</li>
              <li className="about-grid-info-list-item">Detail-Oriented</li>
              <li className="about-grid-info-list-item">Project Management</li>
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
