import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LuSlash } from "react-icons/lu";

function Breadcrumb({ currentTab }) {
  const router = useRouter();
  console.log(router.asPath);
  const routes = router.asPath.split("/").filter(Boolean);
  console.log(routes);

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

  console.log(items);

  return (
    <div className="container my-4">
      <ul className="d-flex list-unstyled align-items-center">
        <li className="nav-item ">
          <Link href="/">Home</Link>
        </li>
        <LuSlash className="mx-1" />
        {items.map((link) => {
          return (
            <>
              <li className="nav-item">
                <Link
                  aria-current="page"
                  aria-disabled={link.active}
                  href={link.href}
                  className={`${
                    link.active
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
    </div>
  );
}

export default Breadcrumb;

// CREATE BREADCRUMB LINK SHOULD HAVE TITLE , LINKS, ACTIVE .
// ADD
