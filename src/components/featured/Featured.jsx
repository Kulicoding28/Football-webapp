import React from "react";
import styles from "./featured.module.css";

export const Featured = () => {
  return (
    <>
      <div className={styles.featured}>
        <div className={styles.featuredItem}>
          <img
            src="/assets/featured1.png"
            alt=""
            className={styles.featuredImg}
          />
          <div className={styles.featuredTitles}>
            <h1>DEPOK</h1>
            <h2>56 Fields</h2>
          </div>
        </div>
        <div className={styles.featuredItem}>
          <img
            src="/assets/featured2.png"
            alt=""
            className={styles.featuredImg}
          />
          <div className={styles.featuredTitles}>
            <h1>JAKSEL</h1>
            <h2>80 Fields</h2>
          </div>
        </div>
        <div className={styles.featuredItem}>
          <img
            src="/assets/featured3.png"
            alt=""
            className={styles.featuredImg}
          />
          <div className={styles.featuredTitles}>
            <h1>BOGOR</h1>
            <h2>70 Fields</h2>
          </div>
        </div>
      </div>
    </>
  );
};
