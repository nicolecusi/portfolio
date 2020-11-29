import React from "react";
import About from "../components/About/About";
import Layout from "../components/Layout/Layout";
import Portfolio from "../components/Portfolio/Portfolio";
import { StaticQuery, graphql } from "gatsby";
import { ApolloClient, InMemoryCahe, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://159.203.8.28",
  cache: new InMemoryCache(),
});

const query = graphql`
  query {
    strapiHomepage {
      about
    }
  }
`;

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <Layout>
        <About />
        <Portfolio />
      </Layout>
    )}
  />
);

export default IndexPage;
