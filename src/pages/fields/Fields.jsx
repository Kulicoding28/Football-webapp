import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import styles from "./field.module.css";

const Fields = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZpZWxkJTIwc29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1518604964608-053f9db26a16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxmaWVsZCUyMHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1535506197904-e5c09c0e5619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU2fHxmaWVsZCUyMHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1527771210328-6a64f86774d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxmaWVsZCUyMHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1528656685602-17a25fe7abcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmaWVsZCUyMHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1528116289007-172089d148ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxmaWVsZCUyMHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

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
                src={photos[slideNumber].src}
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
          <h1 className={styles.fieldTitle}>Batavia Field</h1>
          <div className={styles.fieldAddress}>
            <FontAwesomeIcon icon={faLocation} />
            <span>Mampang Depok Jawa Barat</span>
          </div>
          <span className={styles.fieldDistance}>
            Excellent location – 500m from center
          </span>
          <span className={styles.fieldPriceHighlight}>
            Book a stay over IDR 500k/hour at this field and get a free drink
          </span>
          <div className={styles.fieldImages}>
            {photos.map((photo, i) => (
              <div className={styles.fieldImgWrapper}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className={styles.fieldImg}
                />
              </div>
            ))}
          </div>
          <div className={styles.fieldDetails}>
            <div className={styles.fieldDetailsTexts}>
              <h1 className={styles.fieldTitle}>
                Playing in the heart of Batavia field
              </h1>
              <p className={styles.fieldDesc}>
                Are you looking for a high-quality football field to rent for
                your next game? Look no further than our facility! Our field is
                perfect for soccer enthusiasts of all skill levels. Our football
                field is equipped with top-of-the-line artificial turf,
                providing a consistent playing surface regardless of the
                weather. Our facility also includes lighting, so you can
                continue your game well into the evening. Our field is
                regulation size, so you can practice and play just like the
                pros. Whether you're organizing a pickup game with friends or
                hosting a league match, our football field is the perfect
                choice. Our rates are affordable, and we offer flexible rental
                options to fit your schedule. Plus, our friendly staff is always
                on hand to answer any questions and ensure that your experience
                is a success. Don't settle for anything less than the best when
                it comes to your football field rental. Choose our facility for
                a high-quality, enjoyable experience. Contact us today to
                reserve your spot on our field!
              </p>
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
                <b>IDR.800k</b> (2 hours)
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
    </div>
  );
};

export default Fields;
