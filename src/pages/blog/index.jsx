import React, { useState } from "react";
import Navbar from "@/components/LayoutComponents/Navbar";
import Footer from "@/components/LayoutComponents/Footer";
import { tabsLinks } from "@/lib/CONSTANTS";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import CategorySlider from "@/components/categorySlider";

const Data = [
  {
    image: "../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
  {
    image: "../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
  {
    image: "../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
  {
    image: "../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
  {
    image: "../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
  {
    image: "../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
];

function page() {
  const [tabs, setTabs] = useState("Investment Portfolio");
  var settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className={styles.blogPage}>
      <Navbar />
      <section className="container">
        {/* <Breadcrumb category={tabs} /> */}
      </section>
      <section className="container my-5">
        <CategorySlider tabs={tabs} setTabs={setTabs} />
      </section>

      <section className="container my-5" style={{ minHeight: "100vh" }}>
        <div className={styles.blogs}>
          {Data.map((item) => (
            <div className={styles.blog}>
              <div className={styles.blogImage}>
                <Image src={item.image} width={10} height={10} />
              </div>
              <div
                className={styles.description}
                style={{ fontFamily: "Norse" }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
