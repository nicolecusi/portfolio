import React from "react";

import "./style.scss";

const PageTitle = (props) => (
  <div>
    <h1 className="title mt-3 is-1">{props.title}</h1>
  </div>
);

export default PageTitle;
