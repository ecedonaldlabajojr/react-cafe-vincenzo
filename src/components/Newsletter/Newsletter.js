import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles["newsletter-container"]}>
      <div className={styles["newsletter-wrapper"]}>
        <h3>Subscribe</h3>
        <p>
          Sign up to our mailing list and get 15% off your next coffee order.
        </p>
        <form action="" className={styles["subscribe__form"]}>
          <input type="text" placeholder="Email address" />
          <button type="submit" className={styles["btn-subscribe"]}>
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
