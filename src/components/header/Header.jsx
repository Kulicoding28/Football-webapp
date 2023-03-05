import React, { useState } from "react";
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

const Header = () => {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    team: 1,
    hours: 1,
    field: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
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
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className={styles.date}
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
              {`${options.team} team . ${options.hours}hours . ${options.field}field`}
            </span>
            {openOptions && (
              <div className={styles.option}>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Team</span>
                  <div className={styles.optionCounter}>
                    <button
                      disabled={options.team <= 1}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("team", "d")}
                    >
                      -
                    </button>
                    <span className={styles.optionCounterNumber}>
                      {options.team}
                    </span>
                    <button
                      disabled={options.team >= 4}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("team", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Hour</span>
                  <div className={styles.optionCounter}>
                    <button
                      disabled={options.hours <= 1}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("hours", "d")}
                    >
                      -
                    </button>
                    <span className={styles.optionCounterNumber}>
                      {options.hours}
                    </span>
                    <button
                      disabled={options.hours >= 24}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("hours", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
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
            <button className={styles.headerBtn}>SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
