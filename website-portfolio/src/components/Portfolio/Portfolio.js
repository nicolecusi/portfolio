import React from 'react';

import '../style.scss';
import Emoji from '../Emoji';
import FeaturedWebsite from './FeaturedWebsite';
import { graphql } from 'gatsby';

const Portfolio = () => (
		<section className="section">
			<div className="container">
        <h2 className="title is-2">Work / Portfolio</h2>
        <FeaturedWebsite />
        <FeaturedWebsite />
        <FeaturedWebsite />
			</div>
		</section>
);

export default Portfolio;

