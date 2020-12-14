import { StaticQuery, graphql } from "gatsby";
import React from "react";
import SectionTitle from "./SectionTitle";

import "./style.scss";

export default function About() {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          strapiHomepage {
            about {
              text
            }
            skillets {
              title
              description
              skills
            }
          }
        }
      `}
      render={(data) => (
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <SectionTitle title="About" />
                  <p className="is-medium">{data.strapiHomepage.about.text}</p>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <SectionTitle title="Skillset" />
                  {data.strapiHomepage.skillets.map((skillet) => (
                    <div className="skillset" key={skillet.id}>
                      <h3>{skillet.title}</h3>
                      <p>{skillet.description}</p>
                      <ul>
                        {skillet.skills.map((skill) => (
                          <li key={skill.id}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
}
