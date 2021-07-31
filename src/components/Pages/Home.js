import React from "react";
import WelcomeHero from "../WelcomeHero/WelcomeHero";
import HeroSection from "../HeroSection/HeroSection";
import { tileImages } from "../../images/home-images-src";
import Mosaic from "../Mosaic/Mosaic";
import HighlightsBanner from "../HighlightsBanner/HighlightsBanner";
import styles from "./Home.module.css";

const tileImagesSection = (
  <section className={styles["tile-images-section"]}>
    <div className={styles["tile-images-wrapper"]}>
      {tileImages.map((img) => (
        <img
          src={img.src}
          name={img.id}
          key={img.id}
          className={styles.tileImg}
        />
      ))}
    </div>
  </section>
);

const Home = () => {
  return (
    <React.Fragment>
      <WelcomeHero />
      <HighlightsBanner />
      <Mosaic />
      {tileImagesSection}
    </React.Fragment>
  );
};
export default Home;
