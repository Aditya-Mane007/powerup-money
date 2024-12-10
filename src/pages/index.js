import React from "react";
import HomeHeroSection from "@/components/HomeHeroSection";
import Navbar from "@/components/LayoutComponents/Navbar";
import SimpleSlider from "@/components/Slider";

function Home() {
  return (
    <>
      {/* Header Section */}
      <section className="headerSection">
        <div className="container">
          <nav>
            <Navbar />
          </nav>
          <SimpleSlider />
        </div>
      </section>
      {/* Footer Section */}
    </>
  );
}

export default Home;
