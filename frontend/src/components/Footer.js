import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="center">
          &copy; Nicole Cusi &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
