import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";


function CategoryGrid({ categoryData, tabs, images }) {

  return (
    <>
      <div className="categoryBlog">
        <div className="bar1">
          <div className="div1">
            {/* <img src={categoryData[0].acf.thumbnail_media.thumbnail_media} alt="Finance Image" /> */}
            <Image src={images && images[0]} alt={categoryData[0].title.rendered} width={100} height={100} />
            <div className="info">
              <h5
                className="text-section text-dark fw-bold "
                style={{ fontFamily: "Quatera" }}
              >
                {categoryData[0].title.rendered}
              </h5>
              <Link href="/">
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
          <div className="div1">
            <Image src={images && images[1]} alt={categoryData[1].title.rendered} width={100} height={100} />
            <div className="info">
              <h5
                className="text-section text-dark fw-bold "
                style={{ fontFamily: "Quatera" }}
              >
                {categoryData[1].title.rendered}
              </h5>
              <Link href="/">
                <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
        </div>
        <div className="bar2">
          <Image src={images && images[2]} alt={categoryData[2].title.rendered} width={100} height={100} />
          <div className="info">
            <h5
              className="text-section text-light fw-bold"
              style={{ fontFamily: "Quatera", fontSize: "1.5rem" }}
            >
              {categoryData[2].title.rendered}
            </h5>
            <div className="blog-info d-flex">
              <div className="date mx-2">{categoryData[2].date}</div>
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



//  <>
//      <div className="categoryBlog">
//       <div className="bar1">
//         <div className="div1">
//           <img src={categoryData[tabs][0].img} alt="Finance Image" />
//           <div className="info">
//             <h5
//               className="text-section text-dark fw-bold "
//               style={{ fontFamily: "Quatera" }}
//             >
//               {categoryData[tabs][0].title}
//             </h5>
//             <h5
//               className="text-section text-dark fw-bold "
//               style={{ fontFamily: "Norse" }}
//             >
//               {categoryData[tabs][0].subtitle}
//             </h5>

//             <Link href="/">
//               <IoIosArrowRoundForward size={25} />
//             </Link>
//           </div>
//         </div>
//         <div className="div1">
//           <img src={categoryData[tabs][1].img} alt="Finance Image" />
//           <div className="info">
//             <h5
//               className="text-section text-dark fw-bold "
//               style={{ fontFamily: "Quatera" }}
//             >
//               {categoryData[tabs][1].title}
//             </h5>
//             <h5
//               className="text-section text-dark fw-bold "
//               style={{ fontFamily: "Norse" }}
//             >
//               {categoryData[tabs][1].subtitle}
//             </h5>
//             <Link href="/">
//               <IoIosArrowRoundForward size={25} />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="bar2">
//         <img src={categoryData[tabs][2].img} />
//         <div className="info">
//           <h5
//             className="text-section text-light fw-bold"
//             style={{ fontFamily: "Quatera", fontSize: "1.5rem" }}
//           >
//             {categoryData[tabs][2].title}
//           </h5>
//           <h5
//             className="text-section text-light fw-bold "
//             style={{ fontFamily: "Hando", fontSize: "1.5rem" }}
//           >
//             {categoryData[tabs][2].subtitle}
//           </h5>
//           <div className="blog-info d-flex">
//             <div className="time">{categoryData[tabs][2].time}</div>
//             <div className="date mx-2">{categoryData[tabs][2].date}</div>
//           </div>
//           <div className="btn w-auto border text-light border-light rounded-pill my-4 justify-content-center align-items-center">
//             Read Article <IoIosArrowRoundForward />
//           </div>
//         </div>
//       </div>
//     </div>
//     <Link
//       href="/blog"
//       className="btn rounded-5"
//       style={{
//         border: "2px solid #e4e4e4",
//         fontFamily: "Norse",
//         width: "auto",
//       }}
//     >
//       Read All Financial Freedom Blogs{" "}
//       <MdArrowOutward style={{ marginLeft: ".5rem" }} />
//     </Link>
//   </>