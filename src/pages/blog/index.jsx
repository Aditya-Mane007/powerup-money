import React, { useEffect, useState } from "react";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { CategoryBlogsData, tabsLinks } from "@/lib/CONSTANTS";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import CategorySlider from "@/components/UI/Category/CategorySlider.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PaginatedItems } from "@/components/Pagination";
import { Router, useRouter } from "next/router";
import CategoryBlogs from "@/components/UI/Category/CategoryBlogs";


// Layout
import PageLayout from "@/components/Layout/PageLayout";
import { BASE_URL, fetchImageUrlById, handleCategoryData } from "@/utils/apis";

// function Page({ categories, categoryData }) {

function Page({ categories, fallBackId, categoryData, categoryText }) {

  // console.log(categoryData)

  const router = useRouter()
  const [categoriesData, setCategoriesData] = useState(categoryData)
  const [tabs, setTabs] = useState(fallBackId);
  const [currentTab, setCurrentTab] = useState(categoryText)
  const [images, setImages] = useState([])

  const imagesId = categoriesData.map((data) => data.acf.thumbnail_media?.thumbnail_media)

  // console.log(imagesId)

  // console.log(imagesId)

  console.log("Images: ", images)

  const handleCategoryData = async (id) => {
    try {
      // setLoading(true)
      const res = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?categories=${id}&page=1&per_page=9`)
      const data = await res.json()
      // setLoading(false)
      setCategoriesData(data)
    } catch (error) {
      console.log('Error Fetching Category Data: ', error)
      // setLoading(false)
    } finally {
      // setLoading(false)
    }

  }

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


  const fetchImagesById = async (ids) => {
    const results = await Promise.all(
      ids.map(async (id) => {
        if (id) {
          const data = await fetchImageUrlById(id)
          return data
        } else {
          return "https://dummyimage.com/600x400/000/fff"
        }
      }
      )
    )
    setImages(results)
  }

  useEffect(() => {
    fetchImagesById(imagesId)
    const href = `/blog?category=${currentTab.replaceAll(" ", "-")}`
    router.push(href, href, { shallow: true })
  }, [categoriesData])


  // BreadCrumb Items



  return (
    <>
      <section className="container">
        <Breadcrumb currentTab={currentTab} />
      </section>

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
          <CategoryBlogs categoryData={categoriesData} currentTab={currentTab} images={images} />
        </div>

      </section>
      <section className="container">
        <PaginatedItems itemsPerPage={4} />,
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export default Page;


export async function getServerSideProps(context) {
  const { category } = context.query

  const getCategories = await fetch(`${BASE_URL}/wp-json/wp/v2/categories`)
  const categories = await getCategories.json()

  const categoryId = categories.filter((data) => data.name == category.replaceAll("-", " "))

  const fallBackId = categoryId[0].id || categories[0].id

  const categoryText = categoryId[0].name || categories[0].name


  const getCategoryData = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?categories=${fallBackId}&page=1&per_page=9`)
  const categoryData = await getCategoryData.json()

  // const getCategoryData = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?categories=${categories[0].id}&page=1&per_page=9`)
  // const categoryData = await getCategoryData.json()


  // const imagesId = await categoryData.slice(0, 4).map((data) => data.acf.thumbnail_media?.thumbnail_media)

  // const images = []
  // imagesId.forEach(async (id) => {
  //   const data = await fetchImageUrlById(id)
  //   images.push(data)
  // })

  // console.log("Category Data: ", categoryData)
  // console.log("Images: ", images)
  // console.log("Categories: ", categories)

  // const getCategoryData = await fetch(`https://powerup.onerooftechnologiesllp.com/wp-json/wp/v2/posts?categories=${fallBackId}&page=1&per_page=9`)
  // const categoryData = await getCategoryData.json()

  // const data = await handleCategoryData(fallBackId)

  // return { props: { categories, categoryData } }
  return {
    props: {
      categories,
      categoryData,
      fallBackId,
      categoryText,
    }
  }
}