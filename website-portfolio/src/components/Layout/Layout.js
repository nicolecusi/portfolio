import React from 'react';

import '../style.scss';
import Helmet from './Helmet';
import Header from './header';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
    {children}
		<Footer />
	</div>
);

export default Layout;
