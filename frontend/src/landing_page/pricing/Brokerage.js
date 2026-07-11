import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <h3
            className="mt-3 mb-5"
            style={{ color: "#32aad2ff", marginLeft: "180px" }}
          >
            Brokerage calculator
          </h3>
          <ul>
            <li className="mb-4">
              Call & Trade and RMS auto-squreoff: Additional charges of{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>50 +GST per order.
            </li>
            <li className="mb-4">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-4">
              Physical copies of contact notes, if required , shall be charged{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>20 per contract note.
              Courier charges apply.
            </li>
            <li className="mb-4">
              For NRI account (non-PIS), 0.5% or{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>100 executed order for
              equity (whiever is lower)
            </li>
            <li className="mb-4">
              For NIR account (PIS) , 0.5% or{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>200 per executed order
              for equity (whichever is lower).
            </li>
            <li className="mb-4">
              It the account is in debit balance , any order placed will be
              charged <i class="fa fa-inr" aria-hidden="true"></i>40 per
              executed order instead of{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <h3 h3 className="mt-3 mb-5" style={{ color: "#32aad2ff" }}>
            List of charges
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
