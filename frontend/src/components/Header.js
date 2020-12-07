import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./style.scss";

import Navbar from "./Navbar";
import CaptionTag from "./CaptionTag";

const Header = () => (
  <section className="hero is-medium pattern-cross-dots-lg maya-blue">
    <div className="hero-body">
      <div className="container">
        <div className="content">
          <CaptionTag caption="Based in Toronto, Ontario" styleName="is-link" />
          <h1 className="title mt-3 is-1">Hi there, my name is Nicole Cusi</h1>
          <h3 className="subtitle is-3">
            and I am a web designer &amp; developer
          </h3>
        </div>
        <div className="buttons my-5">
          <button className="button is-primary">Contact me</button>
          <button className="button is-link is-light">
            <FaGithub />
          </button>
          <button className="button is-link is-light">
            <FaLinkedin />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
