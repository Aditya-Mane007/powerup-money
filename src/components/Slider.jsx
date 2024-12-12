import React from "react"
import Slider from "react-slick"
import { IoIosArrowRoundForward } from "react-icons/io"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 col-12 imageDiv">
            <img
              src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
              alt="Fiance Blog Image"
              loading="lazy"
            />
          </div>
          <div className="col-md-6 col-12 my-auto">
            <p
              style={{
                fontSize: ".8rem",
                color: "#2187B3",
                padding: "0",
                margin: "0",
              }}
            >
              SPOTLIGHT
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Quatera",
                fontWeight: "400",
                padding: "0",
                margin: "0.5rem 0",
              }}
            >
              How planning can
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Hando",
                fontWeight: "700",
                padding: "0",
                margin: "0.5rem 0",
              }}
            >
              help you improve your finances
            </p>
            <div className="blog-info d-flex">
              <div className="time">5 min read</div>
              <div className="date mx-2">03rd July 2024</div>
            </div>
            <div className="btn border border-dark rounded-pill my-4  justify-content-center align-items-center">
              Read Article <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5 ">
          <div className="col-md-6 col-12 imageDiv">
            <img
              src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
              alt="Fiance Blog Image"
              loading="lazy"
            />
          </div>
          <div className="col-md-6 col-12 my-auto">
            <p
              style={{
                fontSize: ".8rem",
                color: "#2187B3",
                padding: "0",
                margin: "0",
              }}
            >
              SPOTLIGHT
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Quatera",
                fontWeight: "400",
                padding: "0",
                margin: "0.5rem 0",
              }}
            >
              How planning can
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Hando",
                fontWeight: "700",
                padding: "0",
                margin: "0.5rem 0",
              }}
            >
              help you improve your finances
            </p>
            <div className="blog-info d-flex">
              <div className="time">5 min read</div>
              <div className="date mx-2">03rd July 2024</div>
            </div>
            <div className="btn border border-dark rounded-pill my-4 justify-content-center align-items-center">
              Read Article <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
    </Slider>
    // <div className="container d-flex justify-content-center my-5">
    //   <div className="imageDiv">
    //     <img
    //       src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
    //       alt="Fiance Blog Image"
    //       loading="lazy"
    //     />
    //   </div>
    //   <div className="mx-5">
    //     SOPTLIGHT
    //     <h1>How planning can</h1>
    //     <h1>
    //       help you improve <br /> your finances
    //     </h1>
    //     <div className="blog-info d-flex">
    //       <div className="time">5 min read</div>
    //       <div className="date mx-2">03rd July 2024</div>
    //     </div>
    //     <div className="btn border border-dark rounded-pill my-4  justify-content-center align-items-center">
    //       Read Article <IoIosArrowRoundForward />
    //     </div>
    //   </div>
    // </div>
    // <div className="container d-flex justify-content-center my-5">
    //   <div className="imageDiv">
    //     <img
    //       src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
    //       alt="Fiance Blog Image"
    //       loading="lazy"
    //     />
    //   </div>
    //   <div className="mx-5">
    //     SOPTLIGHT
    //     <h1>How planning can</h1>
    //     <h1>
    //       help you improve <br /> your finances
    //     </h1>
    //     <div className="blog-info d-flex">
    //       <div className="time">5 min read</div>
    //       <div className="date mx-2">03rd July 2024</div>
    //     </div>
    //     <div className="btn border border-dark rounded-pill my-4  justify-content-center align-items-center">
    //       Read Article <IoIosArrowRoundForward />
    //     </div>
    //   </div>
    // </div>
    // <div className="container d-flex justify-content-center my-5">
    //   <div className="imageDiv">
    //     <img
    //       src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
    //       alt="Fiance Blog Image"
    //       loading="lazy"
    //     />
    //   </div>
    //   <div className="mx-5">
    //     SOPTLIGHT
    //     <h1>How planning can</h1>
    //     <h1>
    //       help you improve <br /> your finances
    //     </h1>
    //     <div className="blog-info d-flex">
    //       <div className="time">5 min read</div>
    //       <div className="date mx-2">03rd July 2024</div>
    //     </div>
    //     <div className="btn border border-dark rounded-pill my-4  justify-content-center align-items-center">
    //       Read Article <IoIosArrowRoundForward />
    //     </div>
    //   </div>
    // </div>
  )
}
