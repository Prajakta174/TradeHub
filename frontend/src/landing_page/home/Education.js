import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-5">
          <img src="media/images/education.svg" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="fs-2">Free and open market education</h1>
          <div className="mt-5">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="/" style={{ textDecorationLine: "none" }}>
              Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-3">
            <p>
              Trading Q&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="/" style={{ textDecorationLine: "none" }}>
              TradingQ&A{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
