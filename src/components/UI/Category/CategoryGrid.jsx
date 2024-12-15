import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

function CategoryGrid({ data, tabs }) {
  return (
    <>
      <div className="categoryBlog">
        <div className="bar1">
          <div className="div1">
            <img src={data[tabs][0].img} alt="Finance Image" />
            <div className="info">
              <h5
                className="text-section text-dark fw-bold "
                style={{ fontFamily: "Quatera" }}
              >
                {data[tabs][0].title}
              </h5>
              <h5
                className="text-section text-dark fw-bold "
                style={{ fontFamily: "Norse" }}
              >
                {data[tabs][0].subtitle}
              </h5>

              <Link href="/">
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
          <div className="div1">
            <img src={data[tabs][1].img} alt="Finance Image" />
            <div className="info">
              <h5
                className="text-section text-dark fw-bold "
                style={{ fontFamily: "Quatera" }}
              >
                {data[tabs][1].title}
              </h5>
              <h5
                className="text-section text-dark fw-bold "
                style={{ fontFamily: "Norse" }}
              >
                {data[tabs][1].subtitle}
              </h5>
              <Link href="/">
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
        </div>
        <div className="bar2">
          <img src={data[tabs][2].img} />
          <div className="info">
            <h5
              className="text-section text-light fw-bold"
              style={{ fontFamily: "Quatera", fontSize: "1.5rem" }}
            >
              {data[tabs][2].title}
            </h5>
            <h5
              className="text-section text-light fw-bold "
              style={{ fontFamily: "Hando", fontSize: "1.5rem" }}
            >
              {data[tabs][2].subtitle}
            </h5>
            <div className="blog-info d-flex">
              <div className="time">{data[tabs][2].time}</div>
              <div className="date mx-2">{data[tabs][2].date}</div>
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
        Read All Financial Freedom Blogs{" "}
        <MdArrowOutward style={{ marginLeft: ".5rem" }} />
      </Link>
    </>
  );
}

export default CategoryGrid;
