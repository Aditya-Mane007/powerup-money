import React from "react"
import Navbar from "./LayoutComponents/Navbar"
import HeroImage from "../../public/assets/HomeBannerImage.png"

import SimpleSlider from "./Slider"

const blogs = [
  {
    image:
      "https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png",
    titile: "How planning can",
    subTitle: "help you improve your finances",
    reading: "5 min read",
    date: "03rd July 2024",
  },
  {
    image:
      "https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png",
    titile: "How planning can",
    subTitle: "help you improve your finances",
    reading: "5 min read",
    date: "03rd July 2024",
  },
  {
    image:
      "https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png",
    titile: "How planning can",
    subTitle: "help you improve your finances",
    reading: "5 min read",
    date: "03rd July 2024",
  },
]

function HomeHeroSection() {
  return (
    <div className="homeHeroSection">
      <div className="container">
        <Navbar />

        <div className="d-flex bannerSection my-4 py-5">
          <div className="container d-flex justify-content-center">
            <SimpleSlider blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeroSection
