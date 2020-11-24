import React from 'react';
import About from '../components/About/About';
import Layout from '../components/Layout/Layout';
import Portfolio from '../components/Portfolio/Portfolio';
import { graphql } from "gatsby";

const IndexPage = () => (
  <Layout>
    <About />
    <Portfolio />
  </Layout>
)

export default IndexPage;
