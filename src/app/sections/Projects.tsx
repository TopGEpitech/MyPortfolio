'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/pokemon.gif",
      projectName: "Pokémon IA Battle",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
        "This web application allows users to choose from Generation 1 Pokémon and engage in strategic battles against an AI opponent. Each Pokémon can be customized with moves of various types, affecting battle outcomes based on type advantages. The project showcases the power of Next.js 14 and Shadcn UI in creating an interactive and dynamic application.",
      projectTech: ["Next.js 14", "OpenIA", "TypeScript", "MongoDB"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink:
          "https://github.com/TopGEpitech/Pokedex-Nextjs14/tree/main",
      },
    },
    {
      image: "/pannel_solar.gif",
      projectName: "Pannel Solar Calculator",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
        "A work project developed for my job, this application calculates the optimal solar panel setup based on user inputs like location, energy consumption, and panel efficiency. It provides accurate estimations to help users optimize their solar energy requirements.",
      projectTech: ["Angular 14", "Node.js", "TypeScript", "Algorithmics"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://github.com/TopGEpitech",
      },
    },
    {
      image: "/amac.gif",
      projectName: "AMAC CMS & Statistics Tool",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
        "A CMS and statistics tool created for AMAC to improve content management and track user engagement. This platform combines a WordPress backend with React components for a responsive, user-friendly interface. It also includes SEO optimization, database management, and a reliable statistics tool.",
      projectTech: ["React 18.3.1", "PHP 8.0", "MySQL"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://amac68.fr/",
      },
    },
    {
      image: "/draw_battle.gif",
      projectName: "VirtuaLine - Draw & Battle",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
        "An interactive app where users can draw their own characters and engage them in battles. With customizable sound and visual effects, players bring their creations to life and pit them against others in creative duels.",
      projectTech: ["Flutter", "Dart"],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink:
          "https://www.figma.com/design/JdiVRUMqeVWe2qa4BAyVC5/VirtuaLine?node-id=0-1&node-type=canvas",
      },
    },
    {
      image: "/freeEnergie.gif",
      projectName: "CRM & Sales Application",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
        "As the second developer on this ambitious project, I contribute to building a powerful CRM that manages thousands of clients and employees, driving millions in revenue. I'm also working on a sales application designed to support sales teams in their client interactions, enhancing each step of the process for greater efficiency and responsiveness.",
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
        <h2>Some Projects I’ve Built</h2>
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
              <p className="project-info-overline">Featured Project</p>
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

export default Projects;
