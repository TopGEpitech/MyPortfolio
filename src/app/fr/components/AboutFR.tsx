'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function AboutFR() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("L'élément est visible : ", isInView);
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
          <h2>À propos</h2>
        </div>
        <div className="about-grid">
          <div className="about-grid-info">
            <p className="about-grid-info-text">
              Je m'appelle Younes, un développeur Fullstack passionné par la création
              de solutions numériques innovantes et engageantes.
              <br /> J'ai complété mes études à{" "}
              <Link
                  href="https://www.webacademie.org/"
                  target="_blank"
                  className="link"
              >
                WEB@CADÉMIE
              </Link>{" "}
              par{" "}
              <Link href="https://epitech.eu" target="_blank" className="link">
                EPITECH
              </Link>
              , où j'ai acquis une expertise en conceptualisation, développement et
              déploiement de solutions web tout en respectant les normes modernes de l'industrie.
            </p>
            <p className="about-grid-info-text">
              Formé aux meilleures pratiques par{" "}
              <Link href="https://epitech.eu" target="_blank" className="link">
                EPITECH
              </Link>
              , je me concentre sur la création d'applications web performantes et accessibles,
              tout en améliorant continuellement la qualité des solutions que je développe.
            </p>
            <p className="about-grid-info-text">
              Connaissances acquises durant mes études :
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
              <li className="about-grid-info-list-item">Méthode Agile</li>
              <li className="about-grid-info-list-item">Node.js</li>
              <li className="about-grid-info-list-item">Svelte</li>
              <li className="about-grid-info-list-item">GitHub</li>
              <li className="about-grid-info-list-item">Angular.js</li>
              <li className="about-grid-info-list-item">Python</li>
              <li className="about-grid-info-list-item">TypeScript</li>
              <li className="about-grid-info-list-item">Dart</li>
              <li className="about-grid-info-list-item">Docker</li>
              <li className="about-grid-info-list-item">JavaScript</li>
              <li className="about-grid-info-list-item">Java</li>
              <li className="about-grid-info-list-item">Cloud</li>
            </ul>
            <p className="about-grid-info-text">Compétences relationnelles :</p>
            <ul className="about-grid-info-list">
              <li className="about-grid-info-list-item">Présentation</li>
              <li className="about-grid-info-list-item">Planification</li>
              <li className="about-grid-info-list-item">Pensée analytique</li>
              <li className="about-grid-info-list-item">Résolution de problèmes</li>
              <li className="about-grid-info-list-item">Auto-apprentissage</li>
              <li className="about-grid-info-list-item">Attention à la qualité</li>
              <li className="about-grid-info-list-item">Sens du détail</li>
              <li className="about-grid-info-list-item">Adaptabilité</li>
              <li className="about-grid-info-list-item">Gestion de projet</li>
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

export default AboutFR;