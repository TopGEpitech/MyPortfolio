import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/Spotify2.png",
      projectName: "Spotify Clone",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
      "This web application replicates the core features of Spotify, allowing users to stream music seamlessly. It utilizes APIs to fetch music data and incorporates user authentication for personalized experiences. Users can create playlists, receive music recommendations, and customize their preferences. The clone aims to deliver a user-friendly interface and an immersive music streaming experience similar to Spotify.",
      projectTech: [
        "React.js",
        "Node.js",
        "SCSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://github.com/TopGEpitech",
      },
    },
    {
      image: "/twitter2.png",
      projectName: "Twitter Clone",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
        "TThis web application mirrors the functionalities of Twitter, providing users with a platform to connect and share their thoughts. It includes features such as user profiles, real-time notifications, post creation and sharing, and interactive elements like comments, likes, and retweets. The clone emphasizes an intuitive user interface, fostering user engagement and facilitating seamless social interactions akin to Twitter.",
      projectTech: [
        "Laravel Symfony",
        "Docker",
        "Tailwind",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://github.com/TopGEpitech",
      },
    },
    {
      image: "/mycinema.png",
      projectName: "My Cinema",
      projectLink: "https://youneskad.dev/#work",
      projectDescription:
        "A cinema management system developed its an interactive and user-friendly interface is provided to facilitate the management of members subscriptions movies and showtimes",
      projectTech: [
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "AJAX",
      ],
      projectExternalLinks: {
        github: "https://github.com/TopGEpitech",
        externalLink: "https://github.com/TopGEpitech",
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
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
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
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
