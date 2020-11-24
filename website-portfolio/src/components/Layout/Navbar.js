import React from 'react';
import { FaGithub } from 'react-icons/fa';

import '../style.scss';
import gatsbyLogo from '../../images/gatsby-icon.png';
import bulmaLogo from '../../images/bulma-logo.png';

const Navbar = () => (
	<div className="hero is-hidden-mobile">
		<nav className="navbar is-spaced">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
					>
						<img src={gatsbyLogo} alt="Logo-1" />
						<img src={bulmaLogo} alt="Logo-2" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
            <a className="navbar-item" href="#about">About</a>
            <a className="navbar-item" href="#work">Work</a>
            <a className="navbar-item" href="#contact-me">Contact</a>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
