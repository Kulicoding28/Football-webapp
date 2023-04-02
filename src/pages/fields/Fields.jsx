import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import useFetch from "../../components/hooks/useFetch";
import MailList from "../../components/mailList/MailList";
import { SearchContext } from "../../context/SearchContext";
import styles from "./field.module.css";

const Fields = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/fields/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className={styles.fieldContainer}>
          {open && (
            <div className={styles.slider}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles.close}
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                onClick={() => handleMove("l")}
                icon={faCircleArrowLeft}
                className={styles.arrow}
              />
              <div className={styles.sliderWrapper}>
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className={styles.sliderImg}
                />
              </div>
              <FontAwesomeIcon
                onClick={() => handleMove("r")}
                icon={faCircleArrowRight}
                className={styles.arrow}
              />
            </div>
          )}
          <div className={styles.fieldWrapper}>
            <button className={styles.bookNow}>Reserve or Book Now!</button>
            <h1 className={styles.fieldTitle}>{data.name}</h1>
            <div className={styles.fieldAddress}>
              <FontAwesomeIcon icon={faLocation} />
              <span>{data.address}</span>
            </div>
            <span className={styles.fieldDistance}>
              Excellent location – {data.distance}from center
            </span>
            <span className={styles.fieldPriceHighlight}>
              Book a stay over IDR ${data.cheapestPrice}k/hour at this field and
              get a free drink
            </span>
            <div className={styles.fieldImages}>
              {data.photos?.map((photo, i) => (
                <div className={styles.fieldImgWrapper}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className={styles.fieldImg}
                  />
                </div>
              ))}
            </div>
            <div className={styles.fieldDetails}>
              <div className={styles.fieldDetailsTexts}>
                <h1 className={styles.fieldTitle}>{data.title}</h1>
                <p className={styles.fieldDesc}>{data.desc}</p>
              </div>
              <div className={styles.fieldDetailsPrice}>
                <h1 className={styles.fieldDetailsPricetTitle}>
                  Perfect for a 2-hours playing!
                </h1>
                <span className={styles.fieldDetailsLocated}>
                  Located in the mampang Depok Jawabarat, this field has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>IDR.{days * data.cheapestPrice * options.hours}k</b> (
                  {days} hour)
                </h2>
                <button className={styles.fieldDetailsPricebtn}>
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Fields;
