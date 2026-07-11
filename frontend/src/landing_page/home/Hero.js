import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup"); // redirects to signup page
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alr="Hero Image"
          className="mb-5"
        />

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platforms to invest stocks, derivation , mutual funds,and more
        </p>
        <div style={{ maxWidth: "250px", margin: "0 auto" }}>
          <button
            className="p-2 btn btn-primary fs-5 mb-5 w-100"
            onClick={goToSignup}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
