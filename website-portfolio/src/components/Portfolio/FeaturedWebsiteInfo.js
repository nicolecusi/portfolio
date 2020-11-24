import React from 'react';

import '../style.scss';
import Emoji from '../Emoji';

const FeaturedWebsiteInfo = (props) => (
  <div className="column">
    <h3>{props.title}</h3>
    <p>{props.content}</p>
    <div className="columns">
      <div className="column">
        <p>Role</p>
        <p>{props.role}</p>
      </div>
      <div className="column">
        <p>Type</p>
        <p>{props.type}</p>
      </div>
    </div>
  </div>
);

export default FeaturedWebsiteInfo;
