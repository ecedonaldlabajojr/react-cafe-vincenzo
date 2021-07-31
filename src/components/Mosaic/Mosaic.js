import React from "react";
import styles from "./Mosaic.module.css";

const Mosaic = () => {
  return (
    <section className={styles.mosaic}>
      <div className={styles["mosaic-container"]}>
        <div className={`${styles.imgWrapper} ${styles.one}`}>
          <div className={styles.imgBgc}></div>
        </div>
        <div className={`${styles.imgWrapper} ${styles.two}`}>
          <div className={styles.imgBgc}></div>
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
