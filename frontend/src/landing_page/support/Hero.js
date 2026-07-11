import React from "react";
function Hero() {
  return (
    
        <div className="row">
            <div className="col-12" style={{ backgroundColor: "rgb(250,250,250)", height: "11rem" }}>
                <h2 className="mt-4 mb-4 " style={{ marginLeft: "6rem" }}>
        Support Portal
      </h2>

        <form
  className="d-flex mx-auto"
  style={{
    height: "50px",
    maxWidth: "75%", // makes it 75% of page width
    width: "100%",
      // allows responsiveness
  }}
>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search here..."
    aria-label="Search"
  />
  <button className="btn btn-primary" type="submit">
    Search
  </button>
</form>

      



            </div>

        
    </div>

      

      
    
  );
}

export default Hero;
