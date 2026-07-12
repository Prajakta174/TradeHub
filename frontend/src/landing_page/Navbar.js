import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const openDashboard = async () => {
    try {
      await axios.get("https://tradehub-6mu3.onrender.com/api/auth/check", {
        withCredentials: true,
      });

      window.location.href = "https://tradehub-sandy-omega.vercel.app";
    } catch {
      // Save the dashboard URL
      localStorage.setItem("redirectAfterLogin", "http://localhost:3001");

      window.location.href = "https://trade-hub-zeta.vercel.app/login";
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg  border-bottom sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container-fluid p-2">
        <Link className="navbar-brand ms-5" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav  mb-2 mb-lg-0"
            style={{ marginRight: "180px" }}
          >
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={openDashboard}
                className="btn btn-primary ms-2"
                style={{
                  borderRadius: "6px",
                  padding: "6px 18px",
                  fontWeight: "500",
                }}
              >
                Dashboard
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
