import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row " style={{ minHeight: "100%" }}>
        <div className="col-1"></div>

        <div className="col-md-4 mt-5 p-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <div className="d-flex gap-4">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>

        <div className="col-md-6 text-center mb-5">
          <img src={imageURL} style={{ maxWidth: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
