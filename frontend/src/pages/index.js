import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";

export default function IndexPage() {
  return (
    <Layout>
      <Header />
      <About />
      <Portfolio />
    </Layout>
  );
}
