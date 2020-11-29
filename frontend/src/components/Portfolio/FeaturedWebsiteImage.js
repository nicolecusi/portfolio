import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import "../style.scss";

const FeaturedWebsiteImage = (props) => (
  <div className="column">
    <Img fixed={DataCue.file} />
  </div>
);

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

export default FeaturedWebsiteImage;
