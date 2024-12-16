import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { tabsLinks } from "@/lib/CONSTANTS";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/router";

function CategorySlider({ Component, categoryData, categories, images }) {
  const [tabs, setTabs] = useState(categories[0].id);
  const [currentTab, setCurrentTab] = useState(categories[0].name)

  const router = useRouter();

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
      {router.pathname === "/blog" &&
        <section className="container">
          <Breadcrumb currentTab={currentTab} />
        </section>
      }

      <div className="slider-container">
        <Slider {...settings}>
          {
            categories.map((tab, index) => (
              <div
                style={{ width: "auto" }}
                key={index}
                onClick={() => {
                  setTabs(tab.id)
                  setCurrentTab(tab.name)
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
            ))
          }
        </Slider>
      </div>
      <Component categoryData={categoryData} tabs={currentTab} images={images} />
    </>
  );
}

export default CategorySlider;



// <>
//   {router.pathname === "/blog" &&
//     <section className="container">
//       <Breadcrumb currentTab={tabs} />
//     </section>
//   }

//   <div className="slider-container">
//  <Slider {...settings}>
// {
//   tabsLinks.map((tab, index) => (
//     <div
//       style={{ width: "auto" }}
//       key={index}
//       onClick={() => setTabs(tab.name)}
//     >
//       <p
//         className={`rounded-5 border ${tabs == tab.title.trim() ? "active" : ""
//           }`}
//         style={{
//           padding: ".5rem 1rem",
//           margin: "0 .5rem",
//           cursor: "pointer",
//         }}
//       >
//         {tab.title}
//       </p>
//     </div>
//   ))
// }
// </Slider >
// </div>
{/* <Component data={props} tabs={tabs} /> */ }
// </>

