import React from "react"
import styles from "@/styles/suggestion.module.css"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Data = [
  {
    image: "../../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
  {
    image: "../../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
  {
    image: "../../assets/blogImage.svg",
    description: "Essential Non-Negotiable Financial Goals to Set",
  },
]

function Suggestion({ title }) {
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
    <section className="container my-2">
      <div className={styles.suggestionTitle}>{title}</div>

      {/* <div className={styles.blogs}> */}
      <div className="slider-container">
        <Slider {...settings}>
          {Data.map((item) => (
            <>
              <div
                className={styles.blog}
                style={{ width: "400px", height: "auto", margin: "1rem" }}
              >
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
            </>
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </section>
  )
}

export default Suggestion

// This component will be a slider

