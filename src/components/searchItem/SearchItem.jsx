import React from "react";
import styles from "./searchItem.module.css";

const SearchItem = () => {
  return (
    <div className={styles.searchItem}>
      <img src="/assets/card1.png" alt="" className={styles.siImg} />
      <div className={styles.siDesc}>
        <h1 className={styles.siTitle}>Batavia Field</h1>
        <span className={styles.siDistance}>500m from station</span>
        <span className={styles.siTaxiOp}>Free drink</span>
        <span className={styles.siSubtitle}>Field grass original</span>
        <span className={styles.siFeatures}>
          Entire studio • 2 bathroom • Musque
        </span>
        <span className={styles.siCancelOp}>Free cancellation </span>
        <span className={styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={styles.siDetails}></div>
    </div>
  );
};

export default SearchItem;
