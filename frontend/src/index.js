import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import Product from "./landing_page/product/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
