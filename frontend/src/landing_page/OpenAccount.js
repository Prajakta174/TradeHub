import React from "react";
import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open a Zerodha account</h1>
        <p className="mb-5">
          Modern platforms and apps,{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>0 investment, and list{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>20 intraday and F&Q
          trades.
        </p>

        <div style={{ maxWidth: "250px", margin: "0 auto" }}>
          <button
            className="p-2 btn btn-primary fs-5 mb-5 w-100"
            onClick={() => navigate("/signup")}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
