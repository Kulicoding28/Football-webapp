import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import styles from "./reserve.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../hooks/useFetch";

const Reserve = ({ setOpen, fieldId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/fields/room/${fieldId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className={styles.reserve}>
      <div className={styles.rContainer}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.rClose}
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms field:</span>
        {data.map((item) => (
          <div className={styles.rItem} key={item._id}>
            <div className={styles.rItemInfo}>
              <div className={styles.rTitle}>{item.title}</div>
              <div className={styles.rDesc}>{item.desc}</div>
              <div className={styles.rMax}>
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className={styles.rPrice}>{item.price}</div>
            </div>
            <div className={styles.rSelectRooms}>
              {item.roomNumbers.map((roomNumber) => (
                <div className={styles.room}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className={styles.rButton}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
