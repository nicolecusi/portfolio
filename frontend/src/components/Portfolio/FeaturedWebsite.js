import React from "react";

import "../style.scss";
import FeaturedWebsiteInfo from "./FeaturedWebsiteInfo";
import FeaturedWebsiteImage from "./FeaturedWebsiteImage";

export const 

const FeaturedWebsite = (props) => (
  <div className="columns">
    <FeaturedWebsiteImage imgURL={props.url} />
    <FeaturedWebsiteInfo role={props.role} type={props.type} />
  </div>
);

export default FeaturedWebsite;
