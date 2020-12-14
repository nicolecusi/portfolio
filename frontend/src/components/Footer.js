import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import SectionTitle from "./SectionTitle";
import Subtitle from "./Subtitle";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <SectionTitle title="Let's collaborate." />
        <div className="columns">
          <div className="column is-two-thirds">
            <Subtitle
              text={[
                "Have a project in mind or have any questions? ",
                <br />,
                "Feel free to contact me at ",
                <strong>hello@nicolecusi.com</strong>,
              ]}
            />
          </div>
          <div className="column">
            <Button classes="is-inverted is-primary" text="Get in touch" />
          </div>
        </div>

        <p>&copy; Nicole Cusi &mdash; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
