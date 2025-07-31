import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function AboutFR() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Élément visible : ", isInView);
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
          <h2>À propos</h2>
        </div>
        <div className="about-grid">
          <div className="about-grid-info">
            <p className="about-grid-info-text">
              Je suis développeur fullstack titulaire d’un Master de{' '}
              <Link href="https://epitech.eu" target="_blank" className="link">
                EPITECH
              </Link>
              .<br /> J’accompagne les entreprises dans leur transformation digitale et la création de sites web performants.
            </p>

            <p className="about-grid-info-text">
              Compétences techniques :
            </p>
            <ul className="about-grid-info-list">
              <li className="about-grid-info-list-item">TypeScript</li>
              <li className="about-grid-info-list-item">PHP</li>
              <li className="about-grid-info-list-item">Python / C#</li>
              <li className="about-grid-info-list-item">Node.js</li>
              <li className="about-grid-info-list-item">Angular</li>
              <li className="about-grid-info-list-item">Next.js</li>
              <li className="about-grid-info-list-item">CSS/HTML</li>
              <li className="about-grid-info-list-item">Front-end</li>
              <li className="about-grid-info-list-item">Back-end</li>
            </ul>

            <p className="about-grid-info-text">Compétences relationnelles :</p>
            <ul className="about-grid-info-list">
              <li className="about-grid-info-list-item">Communication</li>
              <li className="about-grid-info-list-item">Esprit d’analyse</li>
              <li className="about-grid-info-list-item">Résolution de problèmes</li>
              <li className="about-grid-info-list-item">Sens de la qualité</li>
              <li className="about-grid-info-list-item">Souci du détail</li>
              <li className="about-grid-info-list-item">Gestion de projet</li>
            </ul>
          </div>

          <div className="about-grid-photo">
            <div className="overlay"></div>
            <div className="overlay-border"></div>
            <div className="about-grid-photo-container">
              <Image src="/younespicture.jpeg" alt="profil" fill />
            </div>
          </div>
        </div>
      </motion.div>
  );
}

export default AboutFR;
