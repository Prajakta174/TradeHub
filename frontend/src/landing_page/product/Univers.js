import React from "react";
import { useNavigate } from "react-router-dom";
function Univers() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup"); // redirects to signup page
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Title Section */}
        <div className="col-12">
          <h1 className="fs-3 text-center">The Zerodha Universe</h1>
        </div>
        <div className="col-12">
          <p className="text-center mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="row">
        <div className="col-md-4 p-3 text-center mt-5">
          <img src="media/images/smallcaseLogo.png" className="mb-2" />
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>

        <div className="col-md-4 p-3 text-center mt-5">
          <img
            src="media/images/streakLogo.png"
            className="mb-2"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="text-muted text-small">Algo & strategy platform</p>
        </div>

        <div className="col-md-4 p-3 text-center mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            className="mb-2"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="text-muted text-small">Options trading platform</p>
        </div>

        <div className="col-md-4 p-3 text-center mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="mb-2"
            style={{ width: "200px", height: "60px" }}
          />
          <p className="text-muted text-small">Asset management</p>
        </div>

        <div className="col-md-4 p-3 text-center mt-5">
          <img src="media/images/goldenpiLogo.png" className="mb-2" />
          <p className="text-muted text-small">Bonds trading platform</p>
        </div>

        <div className="col-md-4 p-3 text-center mt-5">
          <img
            src="media/images/dittoLogo.png"
            className="mb-2"
            style={{ width: "150px", height: "40px" }}
          />
          <p className="text-muted text-small">Insurance</p>
        </div>
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

export default Univers;
