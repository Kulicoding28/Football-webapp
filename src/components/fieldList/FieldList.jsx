import React from "react";
import styles from "./fieldList.module.css";

const FieldList = () => {
  return (
    <div className={styles.fList}>
      <div className={styles.fListItem}>
        <img src="/assets/card1.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1 className={styles.judul}>Batavia Field</h1>
        </div>
      </div>

      <div className={styles.fListItem}>
        <img src="/assets/card2.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1 className={styles.judul}>Ragunan Field</h1>
        </div>
      </div>

      <div className={styles.fListItem}>
        <img src="/assets/card3.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1 className={styles.judul}>Kukusan Field</h1>
        </div>
      </div>
      <div className={styles.fListItem}>
        <img src="/assets/card4.png" alt="" className={styles.fListImg} />
        <div className={styles.fListTitle}>
          <h1 className={styles.judul}>Kemang Field</h1>
        </div>
      </div>
    </div>
  );
};

export default FieldList;
