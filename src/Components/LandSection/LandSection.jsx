import React from "react";
import "./LandSection.css";

function LandSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 order-lg-2 mt-lg-5">
          <img className="img-fluid" src="medical-team.png" alt="" />
        </div>
        <div className="col-lg-6 order-lg-1 mt-lg-5 mt-3">
          <h1 className="fw-bold fs-lg-9 fs-1 title-landing-section">
            Crafting Financial Wellness Where Precision Meets Personalization in
            Medical Billing Solutions.
          </h1>
          <p className="fs-5 claim-acepptance-text">
            Our claim acceptance rate stands at 99.9%.
          </p>
          <p className="fs-5 text-land-section">
            From the moment a patient steps through your doors to the successful
            collection of payments, our dedicated Revenue Cycle Management (RCM)
            team is committed to identifying and resolving any obstacles
            hindering your financial growth.
          </p>
          <div className="d-grid gap-2 d-lg-flex">
            <a className="btn button-call-us" href="#" role="button">
              Call Us
            </a>
            <a className="btn button-leave-a-message" href="#" role="button">
              Leave a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandSection;
