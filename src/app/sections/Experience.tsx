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
      name: "FreeEnergie",
      role: "TypeScript & JavaScript - Developer",
      url: "https://www.linkedin.com/company/freeenergie",
      start: "Currently",
      end: "1 year",
      shortDescription: [
        "Currently leading the development of a CRM with Angular for the front-end and Node.js for the back-end, managing thousands of clients and employees. This platform optimizes internal management and provides an effective solution for various business needs.",
        "Also developing a sales application in Next.js and AdonisJS, assisting sales representatives in client interactions. This app uses APIs to improve the efficiency and speed of sales processes.",
      ],
    },

    {
      name: "MBen Dev",
      role: "Freelance Developer",
      url: "https://www.linkedin.com/company/abbi-tech/?trk=similar-pages",
      start: "May 2023",
      end: "May 2023",
      shortDescription: [
        "As a freelance developer, I had the opportunity to work on a project for MBen Dev, a company that assists its clients in digitizing their business and provides a wide range of services to cover various support functions.",
        "It enabled me to contribute to the digital transformation of a business and witness firsthand the positive impact of technology in optimizing operations.",
      ],
    },
    {
      name: "BlazingBoost",
      role: "Coach E-sport",
      url: "https://blazingboost.com/",
      start: "September 2021",
      end: "November 2023",
      shortDescription: [
        "As a former Esports coach, I not only helped players enhance their confidence, determination, and physical fitness",
        "but I also had the opportunity to interact with individuals from around the world, which allowed me to develop a strong command of the English language.",
        "My objective was to provide technical advice to optimize their performance on the field.",
      ],
    },
    {
      name: "BAPE",
      role: "Influencer",
      url: "https://www.instagram.com/bape__france/",
      start: "September 2018",
      end: "August 2019",
      shortDescription: [
        "As an influencer for A BATHING APE France, I promoted collections and events with original content and my unique perspective. ",
        "This experience helped me gain a better understanding of consumer expectations and effectively communicate with my online audience.",
        "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
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
