import React from "react";
import useFetch from "../hooks/useFetch";
import styles from "./featuredField.module.css";

const FeaturedField = () => {
  const { data, loading, error } = useFetch("/fields?featured=true&limit=2");

  return (
    <div className={styles.ff}>
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className={styles.ffItem} key={item._id}>
              <img src={item.photos[0]} alt="" className={styles.ffImg} />
              <span className={styles.ffName}>{item.name}</span>
              <span className={styles.ffCity}>{item.city}</span>
              <span className={styles.ffPrice}>
                Price IDR{item.cheapestPrice}K/day
              </span>
              {item.rating && (
                <div className="ffRating">
                  <button className={styles.ffRatingButton}>
                    {item.rating}
                  </button>
                  <span className={styles.ffRatingEx}>Excelent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedField;
