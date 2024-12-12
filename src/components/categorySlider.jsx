import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tabsLinks } from "../lib/CONSTANTS.js";

function CategorySlider({ tabs, setTabs }) {
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
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {tabsLinks.map((tab) => (
          <div style={{ width: "auto" }} onClick={() => setTabs(tab.title)}>
            <p
              className={`rounded-5 border ${
                tabs == tab.title.trim() ? "active" : ""
              }`}
              style={{ padding: ".5rem 1rem", margin: "0 .5rem" }}
            >
              {tab.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategorySlider;
