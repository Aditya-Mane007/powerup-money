import Link from "next/link"
import React from "react"

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
    <div className="d-flex justify-content-between p-4 heroSection">
      <div className="pe-auto">
        PowerUp Money
        {/* <img src={PowerUp} alt="" /> */}
      </div>
      <div>
        {links.map((link) => (
          <Link
            href={link.link}
            className="mx-2 text-dark text-decoration-none "
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
