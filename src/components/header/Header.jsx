import React, { useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faFutbolBall,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Header = () => {
  const [place, setPlace] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    field: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { place, dates, options } });
    navigate("/fields", { state: { place, dates, options } });
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Navbar />
        <h1 className={styles.headerTitle}>Discover</h1>
        <h3 className={styles.headerDesc}>Of All Football Fields</h3>

        <div className={styles.headerSearch}>
          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon
              icon={faFutbolBall}
              className={styles.headerIcon}
            />
            <input
              type="text"
              placeholder="Select a fields"
              className={styles.headerSearchInput}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={styles.headerIcon}
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className={styles.headerSearchText}
            >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className={styles.date}
                minDate={new Date()}
              />
            )}
          </div>
          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles.headerIcon}
            />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className={styles.headerSearchText}
            >
              {` ${options.field}field`}
            </span>
            {openOptions && (
              <div className={styles.option}>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Field</span>
                  <div className={styles.optionCounter}>
                    <button
                      disabled={options.field <= 1}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("field", "d")}
                    >
                      -
                    </button>
                    <span className={styles.optionCounterNumber}>
                      {options.field}
                    </span>
                    <button
                      disabled={options.field >= 3}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("field", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.headerSearchItem}>
            <button className={styles.headerBtn} onClick={handleSearch}>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
