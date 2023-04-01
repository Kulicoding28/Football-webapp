import React from "react";
import { Featured } from "../../components/featured/Featured";
import FeaturedField from "../../components/featuredField/FeaturedField";
import FieldList from "../../components/fieldList/FieldList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <h1 className={styles.featuredTitle}>All Football Fields</h1>
        <Featured />
        <div className={styles.grayDiv}>
          <h1 className={styles.homeTitle}>Browse By Type</h1>
          <FieldList />
        </div>
        <h1 className={styles.homeTitles}>Browse By Favorite </h1>
        <FeaturedField />
        <MailList />
        <Footer />
      </div>
    </>
  );
};
export default Home;
