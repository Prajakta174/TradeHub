import React from "react";

function Hero() {
  return (
    <div className="container  mt-5  ">
      <div className="row ">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto p-4 border-bottom">
          <h2 className="text-center">Pricing</h2>
          <p className="text-muted text-center mb-4 mt-3">
            Free equity investment and flat Rs.20 traday and F&O trades
          </p>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <img src="media/images/pricingEquity.svg" style={{ width: "60%" }} />
          <h2>Free equity delivery</h2>
          <p>
            All equity investment (NSE ,BSE), are absolutely free -{" "}
            <i class="fa fa-inr" aria-hidden="true"></i>0 brokerage.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <img src="media/images/intradayTrades.svg" style={{ width: "60%" }} />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            industry trades across equity , currency ,and commodity trades.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <img src="media/images/pricingMF.svg" style={{ width: "60%" }} />
          <h2>Free direct MF</h2>
          <p>
            TAll direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
