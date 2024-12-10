import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="container d-flex justify-content-center my-5">
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
      </div>
      <div className="container d-flex justify-content-center my-5">
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
      </div>
    </Slider>
  );
}
