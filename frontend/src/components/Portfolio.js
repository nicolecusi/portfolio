import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./style.scss";
import SectionTitle from "./SectionTitle";
import Subtitle from "./Subtitle";

function PortfolioProject({ project }) {
  const projectRole = determineRole();

  function determineRole() {
    switch (project.role) {
      case "developer":
        return "Development";
      case "designer":
        return "Design";
      default:
        return "Design & Development";
    }
  }

  return (
    <div className="column">
      <div className="card">
        <Img fixed={project.image} />
      </div>
      <div className="portfolio-content has-text-centered	">
        <Subtitle text={project.title} />
        <h5 className="subtitle is-6">{projectRole}</h5>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <StaticQuery
      query={graphql`
        query PortfolioQuery {
          strapiHomepage {
            featuredWebsites {
              title
              role
              image {
                publicURL
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="section">
          <div className="container">
            <SectionTitle title="Projects" />
            <div className="columns my-6 is-variable is-7">
              {data.strapiHomepage.featuredWebsites.map((project) => (
                <PortfolioProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    />
  );
}
