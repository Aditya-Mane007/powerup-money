import React from "react"
import styles from "@/styles/suggestion.module.css"
import Slider from "react-slick"
import Image from "next/image"

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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  }
  return (
    <section className="container my-5">
      <div className={styles.suggestionTitle}>{title}</div>

      {/* <div className="slider-container"> */}
      <div className={styles.blogs}>
        {/* <Slider {...settings}> */}
        {Data.map((item) => (
          <>
            <div
              className={styles.blog}
              style={{ width: "auto", height: "auto" }}
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
        {/* </Slider> */}
      </div>
      {/* </div> */}
    </section>
  )
}

export default Suggestion

// This component will be a slider

