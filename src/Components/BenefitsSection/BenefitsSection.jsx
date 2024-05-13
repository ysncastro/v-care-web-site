import "./BenefitsSection.css";

function BenefitsSection() {
  return (
    <div className="container mb-5">
      <div className="benefits-section rounded-3 row align-items-center justify-content-center p-4">
        <div className="col-lg-6">
          <h1 className="benefits-title mb-4">
            Benefits of Choosing Vcare Billing Services
          </h1>
          <p className="benefits-paragraph">
            At Vcare Medical Billing, we relieve financial burdens and actively
            work to enhance your overall RCM operations. It's our commitment to
            every medical billing client nationwide. Just as you excel in your
            field, we excel in ours. Your success is our success.
          </p>
        </div>
        <img src="people-smiling.png" className="col-lg-6 img-fluid"></img>
      </div>
    </div>
  );
}

export default BenefitsSection;
