import React from "react";
import styles from "./HighlightsBanner.module.css";

import { AiOutlineGift } from "react-icons/ai";
import { GiCoffeeBeans } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";

const HighlightsBanner = () => {
  return (
    <section className={styles["highlights__container"]}>
      <div className={styles["highlights__wrapper"]}>
        <div className={styles.highlight}>
          <AiOutlineGift className={styles.highlightIcon} />
          <h3>Gift Pack</h3>
          <p>Send coffee care pack to friends or family.</p>
        </div>
        <div className={styles.highlight}>
          <GiCoffeeBeans className={styles.highlightIcon} />
          <h3>Freshly Roasted</h3>
          <p>
            Fresh from the farm, roasted into something vibrantly flavorful.
          </p>
        </div>
        <div className={styles.highlight}>
          <FiCoffee className={styles.highlightIcon} />
          <h3>Flavorful Coffee</h3>
          <p>
            Flavor matters the most. Find what you like and learn to brew a good
            cup at home.
          </p>
        </div>
        <div className={styles.highlight}>
          <IoStorefrontOutline className={styles.highlightIcon} />
          <h3>Store Hours</h3>
          <p>Open Daily 8:00am - 5:00 pm.</p>
        </div>
      </div>
    </section>
  );
};

export default HighlightsBanner;
