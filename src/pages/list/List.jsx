import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import styles from "./list.module.css";

const List = () => {
  const location = useLocation();

  const [place, setPlace] = useState(location.state.place);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

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
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
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
                  <input type="number" className={styles.lsOptionItem} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    {" "}
                    Max Price <small>per hours</small>
                  </span>
                  <input type="number" className={styles.lsOptionItem} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}> Teams</span>
                  <input
                    min={1}
                    max={4}
                    type="number"
                    className={styles.lsOptionItem}
                    placeholder={options.team}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Hour</span>
                  <input
                    min={1}
                    max={4}
                    type="number"
                    className={styles.lsOptionItem}
                    placeholder={options.hours}
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
            <button className={styles.lsBtn}>Search</button>
          </div>
          <div className={styles.listResult}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
