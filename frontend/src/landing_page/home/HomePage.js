import React from "react";
import Education from "./Education";
import Hero from "./Hero";
import Awards from "./Awards";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Stats from "./Stats";
import Footer from "../Footer";
import Navbar from "../Navbar";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
