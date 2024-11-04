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
            My name is Younes, a Fullstack developer passionate about creating
            innovative and engaging digital solutions.
            <br /> I completed my studies at{" "}
            <Link
              href="https://www.webacademie.org/"
              target="_blank"
              className="link"
            >
              WEB@CADÉMIE
            </Link>{" "}
            by{" "}
            <Link href="https://epitech.eu" target="_blank" className="link">
              EPITECH
            </Link>
            , where I gained expertise in conceptualizing, developing, and
            deploying web solutions while adhering to modern industry standards.
          </p>
          <p className="about-grid-info-text">
            Learned with best practices from{" "}
            <Link href="https://epitech.eu" target="_blank" className="link">
              EPITECH
            </Link>
            , I focus on building high-performance, accessible web applications
            while continuously refining the quality of the solutions I develop.
          </p>
          <p className="about-grid-info-text">
            Core knowledge gained throught my studies :
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">PHP</li>
            <li className="about-grid-info-list-item">Ruby</li>
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Symfony</li>
            <li className="about-grid-info-list-item">Golang</li>
            <li className="about-grid-info-list-item">Vue.js</li>
            <li className="about-grid-info-list-item">Laravel</li>
            <li className="about-grid-info-list-item">Agile Method</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Svelte</li>
            <li className="about-grid-info-list-item">GitHub</li>
            <li className="about-grid-info-list-item">Angular.js</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">GitHub</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">Dart</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">Cloud</li>
          </ul>{" "}
          <p className="about-grid-info-text">
Soft skills :          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Presentation</li>

              <li className="about-grid-info-list-item">Planning</li>
              <li className="about-grid-info-list-item">Analytical Thinking</li>
              <li className="about-grid-info-list-item">Problem-Solving</li>
            <li className="about-grid-info-list-item">Self-Learning</li>
            <li className="about-grid-info-list-item">Attention to Quality</li>
              <li className="about-grid-info-list-item">Detail-Oriented</li>
              <li className="about-grid-info-list-item">Adaptability</li>
            <li className="about-grid-info-list-item">Project Management</li>

          </ul>{" "}

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
