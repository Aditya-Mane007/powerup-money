import React from "react"
import { IoIosMenu } from "react-icons/io"
import Link from "next/link"

const links = [
  {
    title: "PowerUp Money",
    link: "/powerup",
  },
  {
    title: "PowerUp P2P",
    link: "powerupp2p",
  },
  {
    title: "Calculators",
    link: "calculators",
  },
  {
    title: "Blog",
    link: "blog",
  },
]

function Navbar() {
  return (
    // <div className="d-flex justify-content-between p-4 heroSection">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          PowerUp Money
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <IoIosMenu />
          {/* <span class="navbar-toggler-icon"></span> */}
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              {links.map((link) => (
                <li class="nav-item">
                  <Link
                    className="nav-link active"
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

/* <div>
        {links.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="mx-2 text-dark text-decoration-none "
          >
            {link.title}
          </Link>
        ))}
      </div> */
