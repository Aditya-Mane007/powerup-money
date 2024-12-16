import React, { useEffect, useState } from "react"
import { IoIosMenu } from "react-icons/io"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/assets/powerup_money_logo_black.svg"
import { Links } from "../../lib/CONSTANTS.js"
import { useRouter } from "next/router"

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 80 ? setIsSticky(true) : setIsSticky(false)
    })
  }, [])
  return (
    <nav
      className={`navbar navbar-expand-lg ${isSticky ? "fixed-top" : ""} `}
      style={{ background: `${isSticky ? "white" : "transparent"}` }}
    >
      <div className="container">
        <Link className="nvabar-brand" href="/">
          <Image src={Logo} width={2} height={2} alt="Powerup Money" style={{ width: "11rem" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <IoIosMenu />
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <a className="navbar-brand" href="#">
              <Image src={Logo} width={50} height={50} className="w-50" />
            </a>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {Links.map((link) => (
                <li className="nav-item ">
                  <Link
                    className={`nav-link ${router.pathname == link.link ? "active" : ""
                      }`}
                    aria-current="page"
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


// CREATE RESPONSIVE NAVBAR WITH REOINSIVENESS 