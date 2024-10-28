import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/TopGEpitech"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">
          Thank you for considering my portfolio.
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
