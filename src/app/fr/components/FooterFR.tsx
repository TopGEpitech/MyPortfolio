"use client";
import Link from "next/link";
import React from "react";

function FooterFR() {
    return (
        <footer>
            <Link
                href="https://github.com/TopGEpitech"
                target="_blank"
                className="footer-link"
            >
        <span className="footer-info">
          Merci d'avoir pris le temps de consulter mon portfolio.
        </span>
            </Link>
        </footer>
    );
}

export default FooterFR;