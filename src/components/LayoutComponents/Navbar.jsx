import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/powerUpLogo.svg";

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
];

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 80 ? setIsSticky(true) : setIsSticky(false);
    });
  }, []);

  return (
    // <div classNameName="d-flex justify-content-between p-4 heroSection">
    <nav
      className={`navbar navbar-expand-lg ${isSticky ? "fixed-top" : ""} `}
      style={{ background: `${isSticky ? "white" : "transparent"}` }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src={Logo} width={50} height={50} />
        </a>
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
              <Image src={Logo} width={50} height={50} />
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
              {links.map((link) => (
                <li className="nav-item ">
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
  );
}

export default Navbar;
