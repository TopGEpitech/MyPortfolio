'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ExperienceFR() {
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
      role: "Développeur TypeScript & JavaScript",
      url: "https://www.linkedin.com/company/freeenergie",
      start: "Actuellement",
      end: "1 an",
      shortDescription: [
        "Actuellement responsable du développement d'un CRM avec Angular pour le front-end et Node.js pour le back-end, gérant des milliers de clients et d'employés. Cette plateforme optimise la gestion interne et fournit une solution efficace pour divers besoins commerciaux.",
        "Je développe également une application de vente en Next.js et AdonisJS, aidant les représentants commerciaux dans leurs interactions clients. Cette application utilise des API pour améliorer l'efficacité et la rapidité des processus de vente.",
      ],
    },
    {
      name: "MBen Dev",
      role: "Développeur Freelance",
      url: "https://www.linkedin.com/company/abbi-tech/?trk=similar-pages",
      start: "Mai 2023",
      end: "Mai 2023",
      shortDescription: [
        "En tant que développeur freelance, j'ai eu l'opportunité de travailler sur un projet pour MBen Dev, une entreprise qui aide ses clients à digitaliser leur activité et propose une large gamme de services pour couvrir diverses fonctions de support.",
        "Cette expérience m'a permis de contribuer à la transformation digitale d'une entreprise et de constater directement l'impact positif de la technologie sur l'optimisation des opérations.",
      ],
    },
    {
      name: "BlazingBoost",
      role: "Coach E-sport",
      url: "https://blazingboost.com/",
      start: "Septembre 2021",
      end: "Novembre 2023",
      shortDescription: [
        "En tant qu'ancien coach E-sport, j'ai aidé les joueurs à renforcer leur confiance, leur détermination et leur condition physique, tout en interagissant avec des personnes du monde entier, ce qui m'a permis de maîtriser la langue anglaise.",
        "Mon objectif était de fournir des conseils techniques pour optimiser leurs performances sur le terrain.",
      ],
    },
    {
      name: "BAPE",
      role: "Influenceur",
      url: "https://www.instagram.com/bape__france/",
      start: "Septembre 2018",
      end: "Août 2019",
      shortDescription: [
        "En tant qu'influenceur pour A BATHING APE France, j'ai promu des collections et des événements avec un contenu original et ma perspective unique.",
        "Cette expérience m'a permis de mieux comprendre les attentes des consommateurs et de communiquer efficacement avec mon audience en ligne.",
        "Dans l'ensemble, ce fut une expérience enrichissante qui m'a permis de développer mes compétences en leadership tout en contribuant positivement à la croissance de l'organisation.",
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
          <h2>Où j'ai travaillé</h2>
        </div>
        <div className="container">
          <ul className="exp-slider">
            <div className="underline"></div>
            {expereinces.map((experience, index) => (
                <li
                    className={`exp-slider-item ${
                        index === selected ? "exp-slider-item-selected" : ""
                    }`}
                    onClick={() => setSelected(index)}
                    key={experience.name}
                >
                  <span>{experience.name}</span>
                </li>
            ))}
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
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
  );
}

export default ExperienceFR;