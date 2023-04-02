import React from "react";
import useFetch from "../hooks/useFetch";
import styles from "./fieldList.module.css";

const FieldList = () => {
  // lanjut ke featured list
  const { data, loading, error } = useFetch("/fields/countByType");

  const images = [
    "https://images.pexels.com/photos/3448246/pexels-photo-3448246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6078300/pexels-photo-6078300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15964698/pexels-photo-15964698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className={styles.fList}>
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className={styles.fListItem} key={i}>
                <img src={img} alt="" className={styles.fListImg} />
                <div className={styles.fListTitle}>
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FieldList;
