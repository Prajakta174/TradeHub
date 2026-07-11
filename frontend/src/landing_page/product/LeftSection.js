import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  coin,
}) {
  return (
    <div className="container">
      <div className="row align-item-center">
        <div className="col-md-6 text-center ">
          <img
            src={imageURL}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-5 mt-5" style={{ marginLeft: "40px" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="d-flex gap-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "20%", textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4 d-flex gap-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LeftSection;
