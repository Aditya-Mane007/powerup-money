import React, { useEffect, useState } from "react";
import "@/styles/Home.module.css";
import Navbar from "@/components/UI/Navbar.jsx";
import SimpleSlider from "@/components/Slider";
import Link from "next/link";
import Slider from "react-slick";
import { Calculators } from "../lib/CONSTANTS.js";
import Footer from "@/components/UI/Footer.jsx";
import CalculatorCard from "@/components/UI/CalculatorCard.jsx";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { BASE_URL, fetchImageUrlById } from "@/utils/apis.js";
import Image from "next/image";


function Home({ categories, categoryData }) {
  const [loading, setLoading] = useState(false)
  const [categoriesData, setCategoriesData] = useState(categoryData)
  const [tabs, setTabs] = useState(categories[0].id);
  const [currentTab, setCurrentTab] = useState(categories[0].name)

  const imagesId = [categoriesData[0]?.acf.thumbnail_media?.thumbnail_media, categoriesData[1]?.acf.thumbnail_media?.thumbnail_media, categoriesData[2]?.acf.thumbnail_media?.thumbnail_media]
  const [images, setImages] = useState([])

  const handleCategoryData = async (id) => {
    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?categories=${id}&page=1&per_page=9`)
      const data = await res.json()
      setLoading(false)

      setCategoriesData(data)
    } catch (error) {
      console.log('Error Fetching Category Data: ', error)
      setLoading(false)
    } finally {
      setLoading(false)
    }

  }


  useEffect(() => {
    imagesId.forEach(async (id) => {
      const data = await fetchImageUrlById(id)
      setImages((prev) => [...prev, data])
    })
  }, [])


  var settings = {
    className: "slider variable-width",
    focusOnSelect: true,
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
    <>
      <section className="headerSection">
        <div className="container">
          <Navbar />
          <SimpleSlider />
        </div>
      </section>

      {/* Blogs Category  */}
      <section className="container my-5">
        <div className="slider-container">
          <Slider {...settings}>
            {categories.slice(0, categories.length - 1).map((tab, index) => (
              <div
                style={{ width: "auto" }}
                key={index}
                onClick={() => {
                  setTabs(tab.id)
                  setCurrentTab(tab.name)
                  handleCategoryData(tab.id)
                }
                }
              >
                <p
                  className={`rounded-5 border ${tabs == tab.id ? "active" : ""
                    }`}
                  style={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    cursor: "pointer",
                  }}
                >
                  {tab.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        {categoriesData.length > 0 ? (
          <>
            <div className="categoryBlog">
              <div className="bar1">
                <div className="bar1-div1">
                  <Image src={images && images[0]} alt={categoryData[0].title.rendered} width={100} height={100} />
                  <div className="info">
                    <h5
                      className="text-section text-dark fw-bold "
                      style={{ fontFamily: "Quatera" }}
                    >
                      {categoriesData[0].title.rendered}
                    </h5>
                    <Link href="/">
                      <IoIosArrowRoundForward size={25} />
                    </Link>
                  </div>
                </div>
                <div className="bar1-div2 mt-3">
                  <Image src={images && images[1]} alt={categoriesData[1].title.rendered} width={100} height={100} />
                  <div className="info">
                    <h5
                      className="text-section text-dark fw-bold "
                      style={{ fontFamily: "Quatera" }}
                    >
                      {categoriesData[1].title.rendered}
                    </h5>
                    <Link href="/">
                      <IoIosArrowRoundForward size={25} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bar2">
                <Image src={images && images[2]} alt={categoriesData[2].title.rendered} width={100} height={100} />
                <div className="info">
                  <h5
                    className="text-section text-light fw-bold"
                    style={{ fontFamily: "Quatera", fontSize: "1.5rem" }}
                  >
                    {categoriesData[2].title.rendered}
                  </h5>
                  <div className="blog-info d-flex">
                    <div className="date mx-2">{categoriesData[2].date}</div>
                  </div>
                  <div className="btn w-auto border text-light border-light rounded-pill my-4 justify-content-center align-items-center">
                    Read Article <IoIosArrowRoundForward />
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className="btn rounded-5"
              style={{
                border: "2px solid #e4e4e4",
                fontFamily: "Norse",
                width: "auto",
              }}
            >
              Read All {currentTab} Blogs{" "}
              <MdArrowOutward style={{ marginLeft: ".5rem" }} />
            </Link>

          </>
        ) : (
          <h6 className="m-4" style={{ fontFamily: "Hando" }}>No Data Availble</h6>
        )}
      </section >


      {/* Calculator Section */}

      < section className="container my-5 calculatorSection" >
        <div className="text-section">
          <p
            style={{
              fontFamily: "Quatera",
              fontSize: "2rem",
              fontWeight: "400",
            }}
          >
            Plan right, plan better
          </p>
          <p
            style={{ fontFamily: "Hando", fontSize: "2rem", fontWeight: "700" }}
          >
            by using our financial calculators
          </p>
        </div>

        <div className="calculatorGrid">
          {Calculators.map((calculator) => (
            <CalculatorCard calculator={calculator} />
          ))}
        </div>
      </section >

      {/* Footer Section */}
      < footer >
        <Footer />
      </footer >
    </>
  );
}

export default Home;


export async function getServerSideProps() {
  const getCategories = await fetch(`${BASE_URL}/wp-json/wp/v2/categories`)
  const categories = await getCategories.json()

  const getCategoryData = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?categories=${categories[0].id}&page=1&per_page=9`)
  const categoryData = await getCategoryData.json()

  return { props: { categories, categoryData } }
}

