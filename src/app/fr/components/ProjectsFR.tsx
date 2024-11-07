'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function ProjectsFR() {
  const projectsData = [
    {
      image: "/pokemon.gif",
      projectName: "Pokémon IA Battle",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
          "Cette application web permet aux utilisateurs de choisir parmi les Pokémon de la Génération 1 et de participer à des combats stratégiques contre un adversaire IA. Chaque Pokémon peut être personnalisé avec des attaques de différents types, influençant les résultats des combats selon les avantages de type. Ce projet démontre la puissance de Next.js 14 et Shadcn UI dans la création d'une application interactive et dynamique.",
      projectTech: ["Next.js 14", "OpenIA", "TypeScript", "MongoDB"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://github.com/TopGEpitech/Pokedex-Nextjs14/tree/main",
      },
    },
    {
      image: "/pannel_solar.gif",
      projectName: "Calculateur de Panneaux Solaires",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
          "Développée dans le cadre de mon travail, cette application calcule l'installation optimale de panneaux solaires en fonction des données de l'utilisateur comme la localisation, la consommation énergétique et l'efficacité des panneaux. Elle fournit des estimations précises pour aider les utilisateurs à optimiser leurs besoins en énergie solaire.",
      projectTech: ["Angular 14", "Node.js", "TypeScript", "Algorithmique"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://github.com/TopGEpitech",
      },
    },
    {
      image: "/amac.gif",
      projectName: "AMAC CMS & Outil de Statistiques",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
          "Un CMS et un outil de statistiques créé pour AMAC afin d'améliorer la gestion de contenu et de suivre l'engagement des utilisateurs. Cette plateforme combine un backend WordPress avec des composants React pour une interface réactive et conviviale. Elle inclut également une optimisation SEO, une gestion de base de données et un outil de statistiques fiable.",
      projectTech: ["React 18.3.1", "PHP 8.0", "MySQL"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://amac68.fr/",
      },
    },
    {
      image: "/draw_battle.gif",
      projectName: "VirtuaLine - Dessiner & Combattre",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
          "Une application interactive où les utilisateurs peuvent dessiner leurs propres personnages et les faire combattre. Avec des effets sonores et visuels personnalisables, les joueurs donnent vie à leurs créations et les opposent dans des duels créatifs.",
      projectTech: ["Flutter", "Dart"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://www.figma.com/design/JdiVRUMqeVWe2qa4BAyVC5/VirtuaLine?node-id=0-1&node-type=canvas",
      },
    },
    {
      image: "/freeEnergie.gif",
      projectName: "CRM & Application de Vente",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
          "En tant que second développeur sur ce projet ambitieux, je contribue à la création d'un CRM puissant qui gère des milliers de clients et employés, générant des millions de revenus. Je travaille également sur une application de vente conçue pour soutenir les équipes commerciales dans leurs interactions avec les clients, améliorant chaque étape du processus pour plus d'efficacité et de réactivité.",
      projectTech: ["Angular", "Node.js", "Next.js", "AdonisJS"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://www.freeenergie.fr/",
      },
    },
  ];

  return (
      <div className="projects" id="work">
        <motion.div
            className="title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
        >
          <h2>Réalisations</h2>
        </motion.div>

        <div className="projects-container">
          {projectsData.map((project) => (
              <motion.div
                  className="project"
                  key={project.projectName}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                  }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image
                        src={project.image}
                        fill
                        alt={project.projectName}
                        quality={100}
                        unoptimized
                    />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Projet en Vedette</p>
                  <h3 className="project-info-title">{project.projectName}</h3>
                  <div className="project-info-description">
                    <p>{project.projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {project.projectTech.map((tech) => (
                        <li className="project-info-tech-list-item" key={tech}>
                          {tech}
                        </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                          href={project.projectExternalLinks.github}
                          target="_blank"
                          className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                          href={project.projectExternalLinks.externalLink}
                          target="_blank"
                          className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
  );
}

export default ProjectsFR;