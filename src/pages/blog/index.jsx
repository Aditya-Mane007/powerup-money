import React, { useEffect, useState } from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { CategoryBlogsData, tabsLinks } from "@/lib/CONSTANTS";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import CategorySlider from "@/components/UI/Category/CategorySlider.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PaginatedItems } from "@/components/Pagination";
import { Router, useRouter } from "next/router";
import CategoryBlogs from "@/components/UI/Category/CategoryBlogs";

// Layout
import PageLayout from "@/components/Layout/PageLayout";

function Page() {
  // const router = useRouter();
  // const [tabs, setTabs] = useState();
  // var settings = {
  //   className: "slider variable-width",
  //   dots: true,
  //   infinite: true,
  //   centerMode: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  // };
  return (
    <>
      {/* <section className="container">
        <Breadcrumb />
      </section> */}
      <section className="container">
        <CategorySlider Component={CategoryBlogs} props={CategoryBlogsData} />
        {/* <CategorySlider tabs={tabs} setTabs={setTabs} /> */}
      </section>
      {/* <section className="container my-5" style={{ minHeight: "100vh" }}> */}
      {/* <div className={styles.blogs}>
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
        </div> */}
      {/* </section> */}
      <section className="container">
        <PaginatedItems itemsPerPage={4} />,
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export default Page;
