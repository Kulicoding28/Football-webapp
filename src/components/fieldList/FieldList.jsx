import React from "react";
import styles from "./fieldList.module.css";

const FieldList = () => {
  return (
    <div className={styles.fList}>
      <div className={styles.fListItem}>
        <img src="/assets/card1.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1>Batavia Field</h1>
        </div>
      </div>

      <div className={styles.fListItem}>
        <img src="/assets/card2.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1>Ragunan Field</h1>
        </div>
      </div>

      <div className={styles.fListItem}>
        <img src="/assets/card3.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1>Kukusan Field</h1>
        </div>
      </div>
      <div className={styles.fListItem}>
        <img src="/assets/card4.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1>Kemang Field</h1>
        </div>
      </div>
    </div>
  );
};

export default FieldList;
