import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className={styles.logo}>Bookingin</span>
          </Link>
          {user ? (
            user.username
          ) : (
            <div className={styles.navItems}>
              <button className={styles.navButton1}>Register</button>
              <button className={styles.navButton}>Login</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
