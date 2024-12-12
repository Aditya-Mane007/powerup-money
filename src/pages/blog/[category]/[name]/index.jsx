import React from "react";
import Navbar from "@/components/LayoutComponents/Navbar";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import MainImage from "../../../../../public/assets/BlogMainImge.png";

function index() {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-between my-5">
        <div className={styles.blogContent}>
          <div className={styles.blogTitle} style={{ fontFamily: "Hando" }}>
            What is Financial Statements: Types and How to Read Them
          </div>
          <div className={styles.blogTimeAndDate}>
            9 min read • Published 31 January 2024
          </div>

          <div className={styles.BlogMainImge}>
            <Image src={MainImage} width={100} height={100} />
          </div>

          <div>
            {styles.BlogTextContent}
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
        <div className={styles.tableofContent}>
          <div className={styles.tableofContentTitle}>Table of contents</div>
          <ol>
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
                Key Components: Operating, Investing, and Financing Activities
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </>
  );
}

export default index;
