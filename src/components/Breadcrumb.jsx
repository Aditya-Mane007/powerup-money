import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LuSlash } from "react-icons/lu";

function Breadcrumb({ category, blogName }) {
  const router = useRouter();
  const routes = router.pathname.split("/").slice(1);

  console.log(routes);
  return (
    <ul>
      <li>Home</li> <LuSlash />
      {routes.map((link) => (
        <>
          <li className="nav-item ">
            <Link
              className={`nav-link ${router.pathname == link ? "active" : ""}`}
              aria-current="page"
              href={link}
            >
              {link.title}
            </Link>
          </li>
          <LuSlash />
        </>
      ))}
    </ul>
  );
}

export default Breadcrumb;
