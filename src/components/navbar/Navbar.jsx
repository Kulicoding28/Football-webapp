import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <span className={styles.logo}>Bookingin</span>
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
