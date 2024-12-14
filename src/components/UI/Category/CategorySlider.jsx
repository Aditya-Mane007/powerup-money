import React, { useState } from "react";
import Slider from "react-slick";
import { tabsLinks } from "@/lib/CONSTANTS";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/router";

function CategorySlider({ Component, props }) {
  const router = useRouter();

  const [tabs, setTabs] = useState("Investment Portfolio");
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    accessibility: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  if (router.pathname === "/blog") {
    return (
      <>
        <section className="container">
          <Breadcrumb currentTab={tabs} />
        </section>

        <div className="slider-container">
          <Slider {...settings}>
            {tabsLinks.map((tab, index) => (
              <div
                style={{ width: "auto" }}
                key={index}
                onClick={() => setTabs(tab.title)}
              >
                <p
                  className={`rounded-5 border ${
                    tabs == tab.title.trim() ? "active" : ""
                  }`}
                  style={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    cursor: "pointer",
                  }}
                >
                  {tab.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <Component data={props} tabs={tabs} />
      </>
    );
  }

  return (
    <>
      {/* <section className="container">
        <Breadcrumb currentTab={tabs} />
      </section> */}

      <div className="slider-container">
        <Slider {...settings}>
          {tabsLinks.map((tab, index) => (
            <div
              style={{ width: "auto" }}
              key={index}
              onClick={() => setTabs(tab.title)}
            >
              <p
                className={`rounded-5 border ${
                  tabs == tab.title.trim() ? "active" : ""
                }`}
                style={{
                  padding: ".5rem 1rem",
                  margin: "0 .5rem",
                  cursor: "pointer",
                }}
              >
                {tab.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <Component data={props} tabs={tabs} />
    </>
  );
}

export default CategorySlider;
