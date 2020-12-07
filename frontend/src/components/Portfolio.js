import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./style.scss";

function PortfolioItem({ item }) {
  return (
    <>
      <div className="column">
        <div className="card">
          <Img fixed={item.image} />
        </div>
      </div>
      <div className="column">
        <h4 className="title is-4">{item.title}</h4>
        <p>{item.description}</p>
        <div className="columns is-vcentered my-4">
          <div className="column">
            <p className="has-text-weight-semibold">Role</p>
            <p>{item.role}</p>
          </div>
          <div className="column">
            <p className="has-text-weight-semibold">Type</p>
            <p>{item.type}</p>
          </div>
        </div>
        <div className="my-4">View link</div>
      </div>
    </>
  );
}

export default function Portfolio() {
  return (
    <StaticQuery
      query={graphql`
        query PortfolioQuery {
          allStrapiFeaturedWebsite {
            edges {
              node {
                id
                title
                description
                role
                type
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="section">
          {data.allStrapiFeaturedWebsite.edges.map(({ node }) => (
            <div
              className="container columns my-6 is-variable is-7"
              key={node.id}
            >
              <PortfolioItem item={node} />
            </div>
          ))}
        </section>
      )}
    />
  );
}
