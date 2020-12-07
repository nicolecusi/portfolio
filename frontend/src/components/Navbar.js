import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "gatsby";

import "./style.scss";
import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";

const Navbar = () => (
  <div className="hero is-hidden-mobile">
    <nav className="navbar is-spaced">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
          >
            <img src={gatsbyLogo} alt="Logo-1" />
            <img src={bulmaLogo} alt="Logo-2" />
          </a>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="#about">
              About
            </Link>
            <Link className="navbar-item" to="#work">
              Work
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
