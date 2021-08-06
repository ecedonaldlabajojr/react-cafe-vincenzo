import React from "react";
import { Link } from "react-router-dom";
import styles from "./Mosaic.module.scss";

const Mosaic = () => {
  return (
    <section className={styles.mosaic}>
      <div className={styles["mosaic-container"]}>
        <div className={`${styles.imgWrapper} ${styles.one}`}>
          <div className={styles.imgBgc}></div>
          <div className={styles.imgCaption}>
            <p>Brew better at home.</p>
            <button>
              <Link to="/brew-guide" className={styles.captionLink}>
                Learn More
              </Link>
            </button>
          </div>
        </div>
        <div className={`${styles.imgWrapper} ${styles.two}`}>
          <div className={styles.imgBgc}>
            <div className={styles.imgCaption}>
              <p>Choose among a wide variety of coffee.</p>
              <button>
                <Link to="/shop" className={styles.captionLink}>
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.imgWrapper} ${styles.three}`}>
          <div className={styles.imgBgc}></div>
        </div>
        <div className={`${styles.imgWrapper} ${styles.four}`}>
          <div className={styles.imgBgc}></div>
        </div>
        <div className={`${styles.imgWrapper} ${styles.five}`}>
          <div className={styles.imgBgc}></div>
        </div>
      </div>
    </section>
  );
};

export default Mosaic;
