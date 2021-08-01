import React from "react";
import WelcomeHero from "../WelcomeHero/WelcomeHero";
import Mosaic from "../Mosaic/Mosaic";
import HighlightsBanner from "../HighlightsBanner/HighlightsBanner";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <React.Fragment>
      <WelcomeHero />
      <HighlightsBanner />
      <Mosaic />
      <Newsletter />
    </React.Fragment>
  );
};
export default Home;
