"use client";
import Button from "@/app/components/Button";
import Logo from "@/app/components/logo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle, RocketIcon } from "lucide-react";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

  const sectionLinks = [
    { name: "Creations", link: "/portfolio" },
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Projects", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setNavbarVisible(true) : setNavbarVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(
        ".nav-items-list-item-link"
    );
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href")!;
        // internal scroll
        if (href.includes("#")) {
          e.preventDefault();
          const targetId = href.split("#")[1];
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const offset = 135;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }
        setResponsiveNavVisible(false);
      });
    });

    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => e.stopPropagation());
    document.documentElement.addEventListener("click", () =>
        setResponsiveNavVisible(false)
    );
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) main?.classList.add("blur");
    else main?.classList.remove("blur");
  }, [responsiveNavVisible]);

  return (
      <nav>
        <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
          <motion.div
              className="brand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link href="/" className="brand-link">
              <Logo />
            </Link>
          </motion.div>

          <Button
              text="🚀 GET PROJECT ESTIMATE IN 24H 🚀"
              link="#contact"
              p="neon"
              textColor="#d0e0ff"
          />

          <motion.div
              className="nav-responsive-toggle"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {responsiveNavVisible ? (
                <CgClose
                    onClick={(e) => {
                      e.stopPropagation();
                      setResponsiveNavVisible(false);
                    }}
                />
            ) : (
                <GiHamburgerMenu
                    onClick={(e) => {
                      e.stopPropagation();
                      setResponsiveNavVisible(true);
                    }}
                />
            )}
          </motion.div>

          <div className={`${responsiveNavVisible && "nav-responsive"} nav-items`}>
            <ul className="nav-items-list">
              {sectionLinks.map(({ name, link }, index) => (
                  <motion.li
                      key={name}
                      className="nav-items-list-item"
                      initial={{ opacity: 0, y: -25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                  >
                    <Link href={link} className="nav-items-list-item-link">
                      {name}
                    </Link>
                  </motion.li>
              ))}
            </ul>

            <ul className="nav-items-list flags-container">
              <li>
                <Link href="/fr" className="flag-icon">
                  <Image
                      src="/fr-flag.png"
                      alt="French Flag"
                      width={24}
                      height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" className="flag-icon">
                  <Image
                      src="/uk-flag.png"
                      alt="UK Flag"
                      width={24}
                      height={24}
                  />
                </Link>
              </li>
            </ul>

            <motion.div
                className="nav-items-button"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            >
              <Button text="Get My Resume" link="/CVYounesKad.pdf" />
            </motion.div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
