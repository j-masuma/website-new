import React from "react";

import HeroSection from "./HeroSection";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Projects from "./Projects";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Blogs />
      <Contact />
      <Projects />
      <Products />
    </div>
  );
};

export default Home;
