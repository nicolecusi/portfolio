import React from "react";

import "./style.scss";
import Helmet from "./Helmet";
import Header from "./header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
