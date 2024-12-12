import React, { useState } from "react";
import "@/styles/Home.module.css";
import Navbar from "@/components/LayoutComponents/Navbar";
import SimpleSlider from "@/components/Slider";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import { MdArrowOutward } from "react-icons/md";

import { tabsLinks, categoryBlogs } from "../lib/CONSTANTS.js";

function Home() {
  const [tabs, setTabs] = useState("Investment Portfolio");
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
            {tabsLinks.map((tab) => (
              <div style={{ width: "auto" }} onClick={() => setTabs(tab.title)}>
                <p
                  className={`rounded-5 border ${
                    tabs == tab.title.trim() ? "active" : ""
                  }`}
                  style={{ padding: ".5rem 1rem", margin: "0 .5rem" }}
                >
                  {tab.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        <div className="categoryBlog">
          <div className="bar1">
            <div className="div1">
              <img src={categoryBlogs[tabs][0].img} alt="Finance Image" />
              <div className="info">
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Quatera" }}
                >
                  {categoryBlogs[tabs][0].title}
                </h5>
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Norse" }}
                >
                  {categoryBlogs[tabs][0].subtitle}
                </h5>

                <Link href="/">
                  <IoIosArrowRoundForward size={25} />
                </Link>
              </div>
            </div>
            <div className="div1">
              <img src={categoryBlogs[tabs][1].img} alt="Finance Image" />
              <div className="info">
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Quatera" }}
                >
                  {categoryBlogs[tabs][1].title}
                </h5>
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Norse" }}
                >
                  {categoryBlogs[tabs][1].subtitle}
                </h5>
                <Link href="/">
                  <IoIosArrowRoundForward size={25} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bar2">
            <img src={categoryBlogs[tabs][2].img} />
            <div className="info">
              <h5
                className="text-section text-light fw-bold"
                style={{ fontFamily: "Quatera", fontSize: "1.5rem" }}
              >
                {categoryBlogs[tabs][2].title}
              </h5>
              <h5
                className="text-section text-light fw-bold "
                style={{ fontFamily: "Hando", fontSize: "1.5rem" }}
              >
                {categoryBlogs[tabs][2].subtitle}
              </h5>
              <div className="blog-info d-flex">
                <div className="time">{categoryBlogs[tabs][2].time}</div>
                <div className="date mx-2">{categoryBlogs[tabs][2].date}</div>
              </div>
              <div className="btn w-auto border text-light border-light rounded-pill my-4 justify-content-center align-items-center">
                Read Article <IoIosArrowRoundForward />
              </div>
            </div>
          </div>
        </div>
        <div
          className="btn rounded-5"
          style={{
            border: "2px solid #e4e4e4",
            fontFamily: "Norse",
            width: "auto",
          }}
        >
          Read All Financial Freedom Blogs{" "}
          <MdArrowOutward style={{ marginLeft: ".5rem" }} />
        </div>
      </section>

      {/* <div className="categoryBlog">
          <div className="bar1">
            <div className="div1">
              <img
                src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
                alt="Finance Image"
              />
              <div className="info">
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Quatera" }}
                >
                  Approach towards
                </h5>
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Norse" }}
                >
                  attaining Financial Freedom
                </h5>

                <Link href="/">
                  <IoIosArrowRoundForward size={25} />
                </Link>
              </div>
            </div>
            <div className="div1">
              <img
                src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
                alt="Finance Image"
              />
              <div className="info">
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Quatera" }}
                >
                  Asset
                </h5>
                <h5
                  className="text-section text-dark fw-bold "
                  style={{ fontFamily: "Norse" }}
                >
                  Allocation
                </h5>
                <Link href="/">
                  <IoIosArrowRoundForward size={25} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bar2">
            <img
              src="https://s3-alpha-sig.figma.com/img/c291/9b23/3ea27a09829c72a9d49bff89e3c4ebf2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-SDoepln7QwD9vVyko2jiNV37xGb3oeVAzxjkeGQuRD9zhmMhY7Zgh~5~acqVip12baACrChVKID5JWtYAUIBEzY8wUFTEh1qkq6MO900loalbno-BCf2DkxEALeRxofv2KxF4ziacs19Q9k4B4GAWd7YqGDWOl2sN-HlQHhfKMeS6Sh~n3MO3kSVPZf-L6PUnk772J7QS5b~Irhgxk64NRQskrs~A7Rvt0XOk3DyxEevgIMnRhbtDrXxzIBQtxze40CLfiSrgLzVhDFPTbR3h~S9Z~uUv47CQvvt-qiLI40BjNTcUm83ZKqFbPz8GW9K5MX2IpRP~-Kfb~UxTtaQ__"
              alt="Finance Image"
            />
            <div className="info">
              <h5
                className="text-section text-light fw-bold"
                style={{ fontFamily: "Quatera", fontSize: "1.5rem" }}
              >
                Why
              </h5>
              <h5
                className="text-section text-light fw-bold "
                style={{ fontFamily: "Hando", fontSize: "1.5rem" }}
              >
                Goal Based Investment Planning is important?
              </h5>
              <div className="blog-info d-flex">
                <div className="time">5 min read</div>
                <div className="date mx-2">03rd July 2024</div>
              </div>
              <div className="btn w-auto border text-light border-light rounded-pill my-4 justify-content-center align-items-center">
                Read Article <IoIosArrowRoundForward />
              </div>
            </div>
          </div>
        </div>
        <div
          className="btn rounded-5"
          style={{
            border: "2px solid #e4e4e4",
            fontFamily: "Norse",
            width: "auto",
          }}
        >
          Read All Financial Freedom Blogs{" "}
          <MdArrowOutward style={{ marginLeft: ".5rem" }} />
        </div>
      </section> */}

      {/* Calculator Section */}

      <section className="container my-5 calculatorSection">
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

        <div className=" calculatorGrid">
          <div className="col-sm-4 calculatorDiv">
            <div className="calculatorIcon">
              <img src="../assets/SIP.png" alt="ICON" />
            </div>
            <p className="calculatorTitle">SIP</p>
            <div className="calculatorDescription">
              Calculate how much wealth you can accumulate through your SIPs
            </div>
            <div className="d-flex justify-content-between align-items-center my-4 calculatorLinkBtn">
              <Link
                href="/"
                className="text-decoration-none text-dark d-flex justify-content-between w-100"
              >
                calculate
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
          <div className="col-sm-4 calculatorDiv">
            <div className="calculatorIcon">
              <img src="../assets/LUMSUM.png" alt="ICON" />
            </div>
            <p className="calculatorTitle">Lumpsum</p>
            <div className="calculatorDescription">
              Estimate the future value of your lumpsum investments
            </div>
            <div className="d-flex justify-content-between align-items-center my-4 calculatorLinkBtn">
              <Link
                href="/"
                className="text-decoration-none text-dark d-flex justify-content-between w-100"
              >
                calculate
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
          <div className="col-sm-4 calculatorDiv">
            <div className="calculatorIcon">
              {/* <TfiMoney size={25} /> */}

              <img src="../assets/CAGR.png" alt="ICON" />
            </div>
            <p className="calculatorTitle">CAGR</p>
            <div className="calculatorDescription">
              Calculate annual growth rate of an investment over a specified
              tenure
            </div>
            <div className="d-flex justify-content-between align-items-center my-4 calculatorLinkBtn">
              <Link
                href="/"
                className="text-decoration-none text-dark d-flex justify-content-between w-100"
              >
                calculate
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>

          <div className="col-sm-4 calculatorDiv">
            <div className="calculatorIcon">
              <img src="../assets/house.png" alt="ICON" />

              {/* <img src={ICON} alt="ICON" /> */}
            </div>
            <p className="calculatorTitle">Home Affordability</p>
            <div className="calculatorDescription">
              Find out how much you can spend on a home, including home loans{" "}
            </div>
            <div className="d-flex justify-content-between align-items-center my-4 calculatorLinkBtn">
              <Link
                href="/"
                className="text-decoration-none text-dark d-flex justify-content-between w-100"
              >
                calculate
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
          <div className="col-sm-4 calculatorDiv">
            <div className="calculatorIcon">
              <img src="../assets/EMI.png" alt="ICON" />
            </div>
            <p className="calculatorTitle">EMI</p>
            <div className="calculatorDescription">
              Estimate the EMI for any loan{" "}
            </div>
            <div className="d-flex justify-content-between align-items-center my-4 calculatorLinkBtn">
              <Link
                href="/"
                className="text-decoration-none text-dark d-flex justify-content-between w-100"
              >
                calculate
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
          <div className="col-sm-4 calculatorDiv">
            <div className="calculatorIcon">
              <img src="../assets/LIFEINSURANCE.png" alt="ICON" />
            </div>
            <p className="calculatorTitle">Life Insurance</p>
            <div className="calculatorDescription">
              Estimate the EMI for any loan{" "}
            </div>
            <div className="d-flex justify-content-between align-items-center my-4 calculatorLinkBtn">
              <Link
                href="/"
                className="text-decoration-none text-dark d-flex justify-content-between w-100"
              >
                calculate
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
