import React from 'react';
import About from '../components/About/About';
import Layout from '../components/Layout/Layout';
import Portfolio from '../components/Portfolio/Portfolio';
import { graphql } from "gatsby";

export const query = graphql `
  query {
    homepage {
      about
    }
  }
`;

const IndexPage = ({data}) => {
  
  const homepage = data.homepage;

  return (
    <Layout>
      <About content={homepage.about}/>
      <Portfolio />
    </Layout>
  )
};

export default IndexPage;

