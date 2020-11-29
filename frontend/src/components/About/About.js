import { StaticQuery, graphql } from "gatsby";
import React from 'react';

import '../style.scss';

const query = graphql `
  query {
    strapiHomepage {
      about
    }
  }
`;

const About = ({props}) => (
  <StaticQuery
    query={query}
    render={data => (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
    
            </div>
            <div className="column">
              <div className="content">
                <h2 className="title is-2">About me</h2>
                <p className="is-medium">
                  {data.strapiHomepage.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default About;
