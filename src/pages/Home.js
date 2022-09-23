import React from "react";
import Meta from "../components/common/Meta";
import Banner from "../components/home/banner";
import Becomefarmer from "../components/home/becomefarmer";
import Defifarmers from "../components/home/defifarmers";
import Ecosystem from "../components/home/ecosystem";
import FAQ from "../components/home/faq";
import Ranking from "../components/home/ranking";
import Sustainable from "../components/home/sustainable";
import Timeline from "../components/home/timeline";
import Tokenomics from "../components/home/tokenomics";
import Utilitiesgames from "../components/home/utilities&games";

const Home = () => {
  const pageTitle = "Home";
  return (
    <>
      <Meta title={pageTitle} />
      <Banner />
      <Defifarmers />
      <Becomefarmer />
      <Sustainable />
      <Ecosystem />
      <Tokenomics />
      <Utilitiesgames />
      <Ranking />
      <Timeline />
      <FAQ />
    </>
  );
};

export default Home;
