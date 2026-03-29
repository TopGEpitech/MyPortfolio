import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "FREE ENERGIE",
      role: "TypeScript & JavaScript Developer",
      url: "https://www.linkedin.com/company/freeenergie",
      start: "Sep 2022",
      end: "Present",
      shortDescription: [
        "Architecture and development of a CRM (Angular / Node.js) used by thousands of clients and collaborators.",
        "Design and delivery of a Sales application (Next.js + AdonisJS) to accelerate business interactions and revenue.",
        "CI/CD pipelines, feature flags, RBAC, secrets management, structured logs and observability dashboards.",
        "Stack: Angular, React, RxJS, NgRx, Node.js, AdonisJS, MongoDB, Redis, KrakenD, Google Cloud, AWS, Docker.",
      ],
    },
    {
      name: "K-DEV Solutions",
      role: "Chief Executive Officer",
      url: "https://www.linkedin.com/in/younes-k-b2927b261/",
      start: "Jul 2025",
      end: "Present",
      shortDescription: [
        "Drive digital transformation for businesses by designing and building custom websites and applications to modernize operations.",
      ],
    },
    {
      name: "MBen Dev",
      role: "FullStack Node.js & React.js Developer",
      url: "https://www.linkedin.com/company/abbi-tech/?trk=similar-pages",
      start: "May 2022",
      end: "Jun 2022",
      shortDescription: [
        "Collaborated on digitalization projects using the MERN stack.",
        "Built dynamic user interfaces with React and robust backends with Node.js.",
      ],
    },
    {
      name: "BlazingBoost",
      role: "Esport Coach",
      url: "https://blazingboost.com/",
      start: "Nov 2020",
      end: "Nov 2022",
      shortDescription: [
        "Coached World of Warcraft players to unlock their full potential through strategic advice and performance optimization.",
        "Helped players refine techniques, adopt winning tactics, and maximize in-game performance.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
