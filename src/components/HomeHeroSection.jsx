import React from "react";
import Navbar from "./LayoutComponents/Navbar";
import HeroImage from "../../public/assets/HomeBannerImage.png";
import { IoIosArrowRoundForward } from "react-icons/io";

import SimpleSlider from "./Slider";
import Slider from "react-slick/lib/slider";

const blogs = [
  {
    image:
      "https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png",
    title: "How planning can",
    subTitle: "help you improve your finances",
    reading: "5 min read",
    date: "03rd July 2024",
  },
  {
    image:
      "https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png",
    title: "How planning can",
    subTitle: "help you improve your finances",
    reading: "5 min read",
    date: "03rd July 2024",
  },
  {
    image:
      "https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png",
    title: "How planning can",
    subTitle: "help you improve your finances",
    reading: "5 min read",
    date: "03rd July 2024",
  },
];

function HomeHeroSection() {
  return (
    <div className="homeHeroSection">
      <div className="container">
        <Navbar />
        <div className="sliderSection">
          <SimpleSlider />
        </div>
        {/* <div className="container d-flex justify-content-center">
            <div className="imageDiv">
              <img
                src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
                alt="Fiance Blog Image"
                loading="lazy"
              />
            </div>
            <div className="mx-5">
              SOPTLIGHT
              <h1>How planning can</h1>
              <h1>
                help you improve <br /> your finances
              </h1>
              <div className="blog-info d-flex">
                <div className="time">5 min read</div>
                <div className="date mx-2">03rd July 2024</div>
              </div>
              <div className="btn border border-dark rounded-pill my-4  justify-content-center align-items-center">
                Read Article <IoIosArrowRoundForward />
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default HomeHeroSection;
