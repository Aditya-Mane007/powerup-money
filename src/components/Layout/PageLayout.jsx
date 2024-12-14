import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import styles from "@/styles/layout.module.css";

function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <nav>
        <Navbar />
      </nav>
      <main className={styles.main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PageLayout;
