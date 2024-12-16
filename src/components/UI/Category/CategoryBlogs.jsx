import React from "react";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import Link from "next/link";

function CategoryBlogs({ categoryData, tabs }) {
  console.log(categoryData);
  return (
    <div className={styles.blogs}>
      {categoryData.map((item) => (
        <Link
          href={`/blog/${tabs.replaceAll(" ", "-").toLowerCase()}/${item.slug}`}
          className={styles.blog}
          key={item.id}
        >
          <div className={styles.blogImage}>
            <Image src={item.acf.thumbnail_media.thumbnail_media} width={10} height={10} />
          </div>
          <div className={styles.description} style={{ fontFamily: "Norse" }}>
            {item.title.rendered}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryBlogs;
