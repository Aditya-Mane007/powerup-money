import React from "react";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { LuDot } from "react-icons/lu";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function CategoryBlogs({ categoryData, currentTab, images }) {
  console.log(categoryData.length)
  const d = new Date()
  return (
    // {
    //   categoryData.length > 0 ? (
    <>
      <div className={styles.blogs}>
        {categoryData.map((item, index) => (
          <Link
            href={`/blog/${currentTab.replaceAll(" ", "-").toLowerCase()}/${item.slug}`}
            className={styles.blog}
            key={item.id}
          >
            <div className={styles.blogImage} >
              <Image src={images[index]} width={100} height={100} />
            </div>

            <div className={styles.blogInfo}>
              <div className={styles.title} style={{ fontFamily: "Norse" }}>{item.title.rendered.slice(0, 60)}...</div>
              <div className={styles.time}>
                <div>{item.acf.read_time}{" "}Min</div> <LuDot />
                {d.getDate(item.date)}{" "}{months[d.getMonth(item.date)]}{" "}{d.getFullYear(item.date)}
              </div>
              <Link href={`/blog/${currentTab.replaceAll(" ", "-").toLowerCase()}/${item.slug}`} style={{ margin: "1rem", textDecoration: "none", fontSize: "1.2rem" }}>Read More</Link>

            </div>
          </Link>
        ))}
      </div>
    </>
    //   ) : (
    //     <>
    //       <div style={{ margin: "1rem" }}>
    //         <h1>
    //           No Data Available
    //         </h1>
    //       </div>
    //     </>
    //   )
    // }

  );
}

export default CategoryBlogs;
