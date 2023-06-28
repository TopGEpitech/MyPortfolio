"use client";
import Head from "next/head";
import Email from "@/app/components/Email";
import Loader from "@/app/components/Loader";
import SocialIcons from "@/app/components/SocialIcons";
import Footer from "@/app/sections/Footer";
import Hero from "@/app/sections/Hero";
import Navbar from "@/app/sections/Navbar";
import React, { useState } from "react";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Projects from "@/app/sections/Projects";
import Experience from "@/app/sections/Experience";

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
                <title>Younes Kad - Developper </title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            {showContent && (
                <>
                    <Navbar />
                    <SocialIcons />
                    <Email />
                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}
            <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        </div>
    );
}

export default Index;