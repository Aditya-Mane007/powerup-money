import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { tabsLinks } from "../lib/CONSTANTS.js"
import Link from "next/link"

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
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {tabsLinks.map((tab) => (
          <div
            style={{ width: "auto", height: "auto" }}
            onClick={() => setTabs(tab.title)}
          >
            <p
              className={`rounded-5  ${
                tabs == tab.title.trim() ? "active" : ""
              }`}
              style={{ padding: ".5rem 1rem", margin: "0 .5rem" }}
            >
              <Link
                href={tab.link}
                className={`text-decoration-none ${
                  tab == tab.title.trim() ? "active" : ""
                }`}
                style={{
                  color: `${tabs == tab.title.trim() ? "white" : "black"}`,
                }}
              >
                {tab.title}
              </Link>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategorySlider
