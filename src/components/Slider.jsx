import React from "react"
import Slider from "react-slick"
import { IoIosArrowRoundForward } from "react-icons/io"
export default function SimpleSlider({ blogs }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {/* {blogs.map((blog) => (
        <div>
          <div className="imageDiv">
            <img src={blog.image} alt="Fiance Blog Image" loading="lazy" />
          </div>
          <div className="mx-5">
            SOPTLIGHT
            <h1>{blog.title}</h1>
            <h1>{blog.subtitle}</h1>
            <div className="blog-info d-flex">
              <div className="time ">{blog.reading}</div>
              <div className="date mx-2">{blog.date}</div>
            </div>
            <div className="btn border border-dark rounded-pill my-4  justify-content-center align-items-center">
              Read Article <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      ))} */}
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Slider>
  )
}
