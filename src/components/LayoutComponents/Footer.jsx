import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div >
          <div className="logo my-4">
            <Image src="../assets/powerUpLogo.svg" width={50} height={50} />
          </div>

          <address>
            Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,{" "}
            <br />
            Koramangala, Bengaluru, Karnataka 560034 <br />
            Contact Us: 080 68216821
          </address>
        </div>
        <div className="socials">
          <Link href="/" className="text-decoration-none text-light ">
            Instagram <MdArrowOutward />
          </Link>
          <Link href="/" className="text-decoration-none text-light ">
            Linkdin <MdArrowOutward />
          </Link>
          <Link href="/" className="text-decoration-none text-light ">
            Twitter <MdArrowOutward />
          </Link>
          <Link href="/" className="text-decoration-none text-light ">
            Facebook <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
