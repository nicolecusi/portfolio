import React from 'react';


const CaptionTag = (props) => (
  <p className={`tag is-light is-rounded is-medium ${ props.styleName }`}>{props.caption}</p>
);

export default CaptionTag;