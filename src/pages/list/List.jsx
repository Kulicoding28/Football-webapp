import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import useFetch from "../../components/hooks/useFetch";
import SearchItem from "../../components/searchItem/SearchItem";
import styles from "./list.module.css";

const List = () => {
  const location = useLocation();

  const [place, setPlace] = useState(location.state.place);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/fields?city=${place}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <>
      <Header type="List" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}>
              <label>Field Place</label>
              <input type="text" placeholder={place} />
            </div>
            <div className={styles.lsItem}>
              <label>Booking Date</label>
              <span
                className={styles.form}
                onClick={() => setOpenDate(!openDate)}
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label>Options</label>
              <div className={styles.lsOptions}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    {" "}
                    Min Price <small>per hours</small>
                  </span>
                  <input
                    type="number"
                    className={styles.lsOptionItem}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    {" "}
                    Max Price <small>per hours</small>
                  </span>
                  <input
                    type="number"
                    className={styles.lsOptionItem}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>

                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Field</span>
                  <input
                    min={1}
                    max={3}
                    type="number"
                    className={styles.lsOptionItem}
                    placeholder={options.field}
                  />
                </div>
              </div>
            </div>
            <button className={styles.lsBtn} onClick={handleClick}>
              Search
            </button>
          </div>
          <div className={styles.listResult}>
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem key={item._id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
