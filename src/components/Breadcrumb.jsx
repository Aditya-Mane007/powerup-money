import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LuSlash } from "react-icons/lu";
import styles from "@/styles/blog.module.css";

function Breadcrumb({ currentTab }) {
  const [filter, setFilter] = useState("new");
  const router = useRouter();
  const routes = router.pathname.split("/").filter(Boolean);

  console.log(router)

  const items = routes.map((route, index) => ({
    href: "/" + routes.slice(0, index + 1).join("/"),
    label: route.charAt(0).toUpperCase() + route.slice(1).replace("-", " "),
    active:
      router.pathname === "/blog" ? false : route == routes[routes.length - 1],
  }));

  if (currentTab) {
    const item = {
      href: `/blog/${currentTab}`,
      label: currentTab,
      active: true,
    };
    items.push(item);
  }


  return (
    <div className="my-4 h-100 d-flex justify-content-between align-content-center">
      <ul className="d-flex w-100 h-100 list-unstyled align-items-center">
        <li className="nav-item ">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
        </li>
        <LuSlash className="mx-1" />
        {items.map((link) => {
          return (
            <>
              <li className="nav-item breadcrumb-link">
                <Link
                  aria-current="page"
                  aria-disabled={link.active}
                  href={link.href}
                  className={`${link.active
                    ? "text-body-secondary pointer-none pe-none"
                    : "text-dark"
                    }`}
                >
                  {link.label}
                  <LuSlash className="mx-1" />
                </Link>
              </li>
            </>
          );
        })}
      </ul>


      {router.pathname == "/blog" && (

        <div className={styles.filter}>
          {/* <div className="title mx-2">Sort By</div> */}
          <select defaultValue={filter} className={styles.select}>
            <option value="Sort By" disabled selected>
              Sort By
            </option>
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
          </select>
        </div>
      )}



    </div>
  );
}

export default Breadcrumb;

// CREATE BREADCRUMB LINK SHOULD HAVE TITLE , LINKS, ACTIVE .
// ADD
