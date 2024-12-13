import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { LuSlash } from "react-icons/lu"

function Breadcrumb() {
  const router = useRouter()
  const segment = router.asPath.split("/").filter(Boolean)
  const routes = router.asPath.split("/").filter(Boolean)
  return (
    <div className="container my-4">
      <ul className="d-flex list-unstyled align-items-center">
        <li className="nav-item ">
          <Link href="/">Home</Link>
        </li>
        <LuSlash className="mx-1" />
        {segment.map((link, index) => {
          const href = routes.slice(0, index + 1).join("/")
          console.log(href)
          return (
            <>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    router.pathname == href ? "active" : ""
                  }`}
                  aria-current="page"
                  href={
                    href == "blog" ? "/blog/investmentPortfolio" : "/" + href
                  }
                >
                  {link}
                  <LuSlash className="mx-1" />
                </Link>
              </li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb



// CREATE BREADCRUMB LINK SHOULD HAVE TITLE , LINKS, ACTIVE . 
// ADD  