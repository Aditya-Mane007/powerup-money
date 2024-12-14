import React, { useState, useEffect } from "react";
import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import PageLayout from "@/components/Layout/PageLayout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
// CREATE LAYOUT OF NAVBAR -> MAIN SECTION -> FOOTER - DONE
