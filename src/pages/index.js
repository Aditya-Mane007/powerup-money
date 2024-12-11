import React from "react"
import HomeHeroSection from "@/components/HomeHeroSection"
import Navbar from "@/components/LayoutComponents/Navbar"
import SimpleSlider from "@/components/Slider"
import Link from "next/link"
import Slider from "react-slick"
import { IoIosArrowRoundForward } from "react-icons/io"
import ICON from "/public/assets/ICON.svg"
import { TfiMoney } from "react-icons/tfi"

const tabsLinks = [
  {
    title: "Investment Portfolio",
    link: "investmentportfoilo",
  },
  {
    title: "P2P LENDING",
    link: "p2plending",
  },
  {
    title: "Personal Finance",
    link: "personalfinance",
  },
  ,
  {
    title: "Wealth Concepts",
    link: "waalthconcepts",
  },
  ,
  {
    title: "news",
    link: "news",
  },
]

function Home() {
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
        {/* <ul class="nav nav-tabs">
          {tabsLinks.map((link) => (
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                {link.title}
              </a>
            </li>
          ))} */}
        <ul className="categoryLinks ">
          <li className="active">Investment Portfolio</li>
          <li>Investment Portfolio</li>
          <li>Investment Portfolio</li>
          <li>Investment Portfolio</li>
          <li>Investment Portfolio</li>
        </ul>

        <div className="categoryBlog">
          <div className="bar1">
            <div className="div1">
              <img
                src="https://res.cloudinary.com/dj524uqwc/image/upload/v1733833853/powerup%20money/HomeBannerImage_gbso11.png"
                alt="Finance Image"
              />
              <div className="info">
                <h5 className="text-section text-dark fw-bold">
                  Approach towards attaining Financial Freedom
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
                <h5 className="text-section text-dark fw-bold">
                  Asset Allocation
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
              <h2 className="text-section text-dark fw-bold ">
                Why <br /> Goal Based Investment Planning is important?
              </h2>
              <div className="blog-info d-flex">
                <div className="time">5 min read</div>
                <div className="date mx-2">03rd July 2024</div>
              </div>
              <div className="btn border border-dark rounded-pill my-4  justify-content-center align-items-center">
                Read Article <IoIosArrowRoundForward />
              </div>
              {/* <Link href="/">
                <IoIosArrowRoundForward size={25} />
              </Link> */}
            </div>
            {/*  */}
          </div>
        </div>
      </section>

      {/* Calculator Section */}

      <section className="container my-5 calculatorSection">
        <div className="text-section">
          <h1>Plan right, plan better</h1>
          <h1>by using our financial calculators</h1>
        </div>

        <div className="calculatorGrid">
          <div className="col-sm-4 calculatorDiv">
            <div className="calculatorIcon">
              {/* <TfiMoney size={25} /> */}
              <img src="../assets/SIP.png" alt="ICON" />
            </div>
            <h4>SIP</h4>
            <div className="description">
              Calculate how much wealth you can accumulate through your SIPs
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
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
            <h4>SIP</h4>
            <div className="description">
              Calculate how much wealth you can accumulate through your SIPs
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
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
            <h4>SIP</h4>
            <div className="description">
              Calculate how much wealth you can accumulate through your SIPs
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
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
            <h4>SIP</h4>
            <div className="description">
              Calculate how much wealth you can accumulate through your SIPs
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
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
            <h4>SIP</h4>
            <div className="description">
              Calculate how much wealth you can accumulate through your SIPs
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
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
            <h4>SIP</h4>
            <div className="description">
              Calculate how much wealth you can accumulate through your SIPs
            </div>
            <div className="d-flex justify-content-between align-items-center my-4">
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
  )
}

export default Home
