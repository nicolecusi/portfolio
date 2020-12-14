import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";

import "./style.scss";

import PageTitle from "../components/PageTitle";
import Subtitle from "./Subtitle";
import Button from "./Button";

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          strapiHomepage {
            pageTitle {
              title
              description
            }
          }
        }
      `}
      render={(data) => (
        <section className="hero section is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="content">
                <PageTitle title={data.strapiHomepage.pageTitle.title} />
                <Subtitle text={data.strapiHomepage.pageTitle.description} />
              </div>
              <div className="buttons my-5">
                <Button classes="is-primary" text="Contact me" />
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
      )}
    />
  );
}
