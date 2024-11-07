"use client";
import Head from "next/head";
import Email from "@/app/components/Email";
import Loader from "@/app/components/Loader";
import SocialIcons from "@/app/components/SocialIcons";
import Footer from "@/app/sections/Footer";
import React, { useState } from "react";
import AboutFR from "@/app/fr/components/AboutFR";
import HeroFR from "@/app/fr/components/HeroFR";
import ProjectsFR from "@/app/fr/components/ProjectsFR";
import ContactFR from "@/app/fr/components/ContactFR";
import NavbarFR from "@/app/fr/components/NavbarFR";
import ExperienceFR from "@/app/fr/components/ExperienceFR";
import FooterFR from "@/app/fr/components/FooterFR";

function Index() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const handleLoaderLoaded = () => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 450);
    };

    return (
        <div className="app">
            <Head>
                <title>Younes K - Developper </title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            {showContent && (
                <>
                    <NavbarFR />
                    <SocialIcons />
                    <Email />
                    <main>
                        <HeroFR />
                        <AboutFR />
                        <ExperienceFR />
                        <ProjectsFR />
                        <ContactFR />
                    </main>
                    <FooterFR />
                </>
            )}
            <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        </div>
    );
}

export default Index;