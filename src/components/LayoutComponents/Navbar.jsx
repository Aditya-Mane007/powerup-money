import Link from "next/link";
import React from "react";
import PowerUp from "../../../public/assets/PowerUp.png";

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
  return (
    <div className="d-flex justify-content-between p-4 heroSection">
      <div className="pe-auto">PowerUp Money</div>
      <div>
        {links.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="mx-2 text-dark text-decoration-none "
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
