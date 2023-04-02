import React from "react";
import { Link } from "react-router-dom";
import styles from "./searchItem.module.css";

const SearchItem = ({ item }) => {
  return (
    <div className={styles.searchItem}>
      <img src={item.photos[0]} alt="" className={styles.siImg} />
      <div className={styles.siDesc}>
        <h1 className={styles.siTitle}>{item.name}</h1>
        <span className={styles.siDistance}>{item.distance} from center</span>
        <span className={styles.siTaxiOp}>Free drink</span>
        <span className={styles.siSubtitle}>Field grass original</span>
        <span className={styles.siFeatures}>{item.desc}</span>
        <span className={styles.siCancelOp}>Free cancellation </span>
        <span className={styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={styles.siDetails}>
        {item.rating && (
          <div className={styles.siRating}>
            <span className={styles.exc}>Excellent</span>
            <button className={styles.btn}>{item.rating}</button>
          </div>
        )}
        <div className={styles.siDetailTexts}>
          <span className={styles.siPrice}>IDR {item.cheapestPrice}k</span>
          <span className={styles.siTaxOp}>Includes parking and fees</span>
          <Link to={`/fields/${item._id}`}>
            <button className={styles.siCheckButton}>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
