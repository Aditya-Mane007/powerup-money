import React from "react";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import Link from "next/link";

function CategoryBlogs({ data, tabs }) {
  console.log(data);
  return (
    <div className={styles.blogs}>
      {data.map((item, index) => (
        <Link
          href={`/blog/${tabs.replace(" ", "-").toLowerCase()}/${item.link}`}
          className={styles.blog}
          key={index}
        >
          <div className={styles.blogImage}>
            <Image src={item.image} width={10} height={10} />
          </div>
          <div className={styles.description} style={{ fontFamily: "Norse" }}>
            {item.description}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryBlogs;
