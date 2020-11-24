import React from 'react';

import '../style.scss';

const About = ({props}) => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">

        </div>
        <div className="column">
          <div className="content">
            <h2 className="title is-2">About me</h2>
            <p className="is-medium">
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
