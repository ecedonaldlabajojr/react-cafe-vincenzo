import React from "react";
import styles from "./Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

const thisYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <div className={styles["footer__bgc-1"]}></div>
      <div className={styles["footer__bgc-2"]}></div>
      <div className={styles["footer__top"]}>
        <div className={styles.footerRow}>
          <p className={styles["row__header"]}>About Us</p>
          <p>This site is a sample.</p>
          <p>Portfolio purposes only.</p>
        </div>
        <div className={styles.footerRow}>
          <p className={styles["row__header"]}>Contact Us</p>
          <div className={styles.iconCentered}>
            <AiOutlineMail />
            <p>vincenzocafe@sample.com</p>
          </div>
          <div className={styles.iconCentered}>
            <BiPhone />
            <p>(032) 233-3333</p>
          </div>
        </div>
        <div className={styles.footerRow}>
          <p className={styles["row__header"]}>Locations</p>
          <p>Eskina unahan</p>
          <p>Purok semento</p>
        </div>
      </div>
      <div className={styles["footer-bottom-wrapper"]}>
        <div className={styles["footer__bottom"]}>
          <div className={styles["footer__bottom-row"]}>
            <p>© {thisYear} Cafe Vincenzo All rights reserved.</p>
          </div>
          <div className={styles["footer__bottom-row"]}>
            <div className={styles["footer__bottom-social"]}>
              <AiFillFacebook className={styles["social-icon"]} />
              <FiTwitter className={styles["social-icon"]} />
              <FaInstagram className={styles["social-icon"]} />
            </div>
          </div>
          <div className={styles["footer__bottom-row"]}>
            <p style={{ fontStyle: "italic" }}>
              Designed by Donald P. Labajo Jr.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
