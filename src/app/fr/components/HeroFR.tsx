import Button from "@/app/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function HeroFR() {
    return (
        <div className="hero">
            <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6,
                }}
            >
                Bonjour, je m'appelle
            </motion.h1>
            <motion.h2
                className="hero-title-large"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.75,
                }}
            >
                Younes K.
            </motion.h2>
            <motion.h3
                className="hero-title-large hero-title-sub"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.05,
                }}
            >
                Développeur FullStack.
            </motion.h3>
            <motion.p
                className="hero-text"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.35,
                }}
            >
                Passionné par l'application de mes connaissances pour créer des solutions numériques innovantes,
                je suis dédié à un apprentissage et une croissance continus. Mon objectif est de devenir un
                développeur Fullstack compétent et accompli à travers les projets que j'ai réalisés durant mon
                passage à {' '}
                <Link href="https://epitech.eu" target="_blank" className="link">
                    EPITECH.
                </Link>
            </motion.p>
            <motion.div
                className="hero-button"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.65,
                }}
            >
            </motion.div>
        </div>
    );
}

export default HeroFR;