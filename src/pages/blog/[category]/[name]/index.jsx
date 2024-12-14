import React, { useState, useRef } from "react";
import Navbar from "@/components/UI/Navbar";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import MainImage from "../../../../../public/assets/BlogMainImge.png";
import Breadcrumb from "@/components/Breadcrumb";
import DropDownIcon from "../../../../../public/assets/DropdownIcon.svg";
import Suggestion from "@/components/Suggestion";

function index() {
  const tableOfContent = useRef();
  const [height, setHeight] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const collapseFunction = () => {
    if (isOpen) {
      setHeight("0px");
      setIsOpen(false);
    } else {
      setHeight(tableOfContent.current.scrollHeight);
      setIsOpen(true);
    }
  };

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <div className="container">
        <div className={styles.blogDetailedPage}>
          <div className={styles.div1} style={{ fontFamily: "Hando" }}>
            <h1>What is Financial Statements: Types and How to Read Them</h1>
            <p>9 min read • Published 31 January 2024</p>
          </div>

          <div className={styles.div2}>
            <Image src={MainImage} width={100} height={100} />
          </div>

          <div className={styles.div3} style={{ height: `${height + 16}px` }}>
            <div className={styles.TableOFContentContainer}>
              <div className={styles.tableofContentTitle}>
                Table of contents{" "}
                <button
                  onClick={collapseFunction}
                  // type="button"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#collapseExample"
                  // aria-expanded="false"
                  // aria-controls="collapseExample"
                >
                  <Image src={DropDownIcon} width={10} height={10} />
                </button>
              </div>
              <div className={styles.tableofContent} style={{ height: height }}>
                <ol
                  id="collapseExample"
                  ref={tableOfContent}
                  style={{ height: height, overflow: "hidden" }}
                >
                  <li>Introduction to Financial Statements</li>
                  <ul>
                    <li>Definition of Financial Statements</li>
                    <li>Importance of Understanding Financial Statements</li>
                  </ul>
                  <li>Income Statement</li>
                  <ul>
                    <li>Definition and Purpose</li>
                    <li>Key Components: Revenue, Expenses, and Profit</li>
                  </ul>
                  <li>Balance Sheet</li>
                  <ul>
                    <li>Definition and Purpose</li>
                    <li>Key Components: Assets, Liabilities, and Equity</li>
                  </ul>
                  <li>Cash Flow Statement</li>
                  <ul>
                    <li>Definition and Purpose</li>
                    <li>
                      Key Components: Operating, Investing, and Financing
                      Activities
                    </li>
                  </ul>
                  <li>Cash Flow Statement</li>
                  <ul>
                    <li>Definition and Purpose</li>
                    <li>
                      Key Components: Operating, Investing, and Financing
                      Activities
                    </li>
                  </ul>
                  <li>Cash Flow Statement</li>
                  <ul>
                    <li>Definition and Purpose</li>
                    <li>
                      Key Components: Operating, Investing, and Financing
                      Activities
                    </li>
                  </ul>
                </ol>
              </div>
            </div>
          </div>

          <div className={styles.div4}>
            <p>
              Financial Freedom is a concept that means different things to
              different people. Recently, a sample set of individuals were asked
              what financial freedom meant to them. The responses were
              interesting and varied. Some of them are listed below
            </p>
            <ul>
              <li>
                Financial Freedom refers to a state where I don’t bother to look
                at the price of the product that I am planning to buy.
              </li>
              <li>
                For me, financial freedom is a state where I don’t worry about
                any of my financial goals (Retirement, Child Education etc)
              </li>
              <li>
                Some of them said – Financial freedom refers to the target of
                achieving a
              </li>
              <li>
                good corpus. This was interesting. This corpus ranged from 1
                Crore for some, 5 Crore for one, 15 Cr for another person.
                Interestingly, a person said 40 Cr whose current take home
                salary is not even 1% of corpus he said.
              </li>
              <li>
                Another interesting answer – Ability to lead a life with the way
                I want to. 
              </li>
            </ul>

            <p>
              Undoubtedly, all of the above statements definitely mean the
              different dimensions of financial freedom.
            </p>

            <p>
              In my humble opinion – Time is the most powerful currency in the
              world- every second or minute lost is irrecoverable.{" "}
            </p>

            <p>
              From an Olympic runner who lost the sprint by a second to a
              Japanese traveler who missed their train by a few minutes, the
              impact of time is felt by all.{" "}
            </p>

            <p>
              As the proverb goes, "Time is money," and it's true- time is a
              precious resource that we must use wisely. 
            </p>

            <hr />

            <p>
              In my opinion - Achieving financial freedom means having complete
              control over your time.{" "}
            </p>

            <p>
              Imagine being able to plan your day the way you want without any
              financial commitments holding you back. Many people work just for
              the sake of meeting their financial goals, but what if you could
              reach those goals and live life on your own terms?
            </p>

            <p>
              It doesn't have to mean complete retirement, but rather spending
              time in a job that interests you and gives you control over your
              most precious commodity - TIME
            </p>

            <p>
              Passive Income is required to manage the lifestyle expenses after
              attaining financial freedom.{" "}
            </p>
          </div>
        </div>
        <Suggestion title="Related Articles" />
        <Suggestion title="Top Articles" />
      </div>
    </>
  );
}

export default index;

// ADD RESPONSIVENESS TO DETAILED PAGE .
