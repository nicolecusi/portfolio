import { StaticQuery, graphql } from "gatsby";
import React from "react";

import "../style.scss";
import PortfolioItem from "../Portfolio/PortfolioItem";
import FeaturedWebsite from "../Portfolio/FeaturedWebsite";

const query = graphql`
  query {
    allStrapiFeaturedWebsite {
      nodes {
        id
        title
        type
        role
        image {
          publicURL
        }
      }
    }
  }
`;

const Portfolio = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <section className="section">
        <div className="container">
          {data.allStrapiFeaturedWebsite.nodes.map(({ node }) => (
            <div key={node.id}>
              <PortfolioItem content={node.} />
            </div>
          ))}
        </div>
      </section>
    )}
  />
);

export default Portfolio;
