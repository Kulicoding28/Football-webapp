import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className={styles.logo}>Bookingin</span>
          </Link>
          <div className={styles.navItems}>
            <button className={styles.navButton1}>Register</button>
            <button className={styles.navButton}>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
