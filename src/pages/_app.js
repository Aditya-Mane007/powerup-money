import React, { useState, useEffect } from "react";
import Footer from "@/components/LayoutComponents/Footer";
import Navbar from "@/components/LayoutComponents/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="rootLayout">
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}



// CREATE LAYOUT OF NAVBAR -> MAIN SECTION -> FOOTER

