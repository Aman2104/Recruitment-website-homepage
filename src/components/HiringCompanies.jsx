import React from "react";

export const HiringCompanies = () => {
  return (
    <div id="customers" class="customers mt-4 section">
      <div class="container text-center">
        <div class="row text-center">
          <h2>Top Hiring Companies</h2>
          <div class="logos col-xs-12 text-center" style={{
            "width": "100%", 
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "contain",
            "height": "284px",
            "backgroundImage":`url(img/customers-lg.webp)`
          }}>
          </div>
        </div>
      </div>
    </div>
  );
};
