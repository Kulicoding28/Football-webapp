import React from "react";
import useFetch from "../hooks/useFetch";
import styles from "./featured.module.css";

export const Featured = () => {
  const { data, loading, error } = useFetch(
    "/fields/countByCity?cities=Depok,Bogor,Jakarta"
  );

  return (
    <>
      <div className={styles.featured}>
        {loading ? (
          "Loading please wait"
        ) : (
          <>
            <div className={styles.featuredItem}>
              <img
                src="/assets/featured1.png"
                alt=""
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h1>DEPOK</h1>
                <h2>{data[0]} Fields</h2>
              </div>
            </div>
            <div className={styles.featuredItem}>
              <img
                src="/assets/featured2.png"
                alt=""
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h1>BOGOR</h1>
                <h2>{data[1]} Fields</h2>
              </div>
            </div>
            <div className={styles.featuredItem}>
              <img
                src="/assets/featured3.png"
                alt=""
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h1>JAKARTA</h1>
                <h2>{data[2]} Fields</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
