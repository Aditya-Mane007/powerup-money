import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

function CalculatorCard({ calculator }) {
  return (
    <div className="calculatorDiv">
      <div className="calculatorIcon">
        <Image
          src={calculator.image}
          alt={calculator.title}
          width={25}
          height={25}
        />
      </div>
      <p className="calculatorTitle">{calculator.title}</p>
      <div className="calculatorDescription">{calculator.description}</div>
      <div className="d-flex justify-content-between align-items-center my-4 calculatorLinkBtn">
        <Link
          href="/"
          className="text-decoration-none text-dark d-flex justify-content-between w-100"
        >
          calculate
          <IoIosArrowRoundForward size={25} />
        </Link>
      </div>
    </div>
  );
}

export default CalculatorCard;
