import React from "react";
import styles from "./featuredField.module.css";

const FeaturedField = () => {
  return (
    <div className={styles.ff}>
      <div className={styles.ffItem}>
        <img src="/assets/card-fav1.png" alt="" className={styles.ffImg} />
        <span className={styles.ffName}>Kemang Field</span>
        <span className={styles.ffCity}>Jakarta Selatan</span>
        <span className={styles.ffPrice}>Price 500k/Hour</span>
        <div className="ffRating">
          <button className={styles.ffRatingButton}>8.9</button>
          <span className={styles.ffRatingEx}>Excelent</span>
        </div>
      </div>
      <div className={styles.ffItem}>
        <img src="/assets/card-fav.png" alt="" className={styles.ffImg} />
        <span className={styles.ffName}>Cibinong Field</span>
        <span className={styles.ffCity}>Bogor</span>
        <span className={styles.ffPrice}>Price 700k/Hour</span>
        <div className="ffRating">
          <button className={styles.ffRatingButton}>8.9</button>
          <span className={styles.ffRatingEx}>Excelent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedField;
