import React from 'react';

import '../style.scss';
import Emoji from '../Emoji';
import FeaturedWebsiteInfo from './FeaturedWebsiteInfo';
import FeaturedWebsiteImage from './FeaturedWebsiteImage';

const FeaturedWebsite = (props) => (
  <div className="columns">
    <FeaturedWebsiteImage />
    <FeaturedWebsiteInfo />
  </div>
);

export default FeaturedWebsite;
