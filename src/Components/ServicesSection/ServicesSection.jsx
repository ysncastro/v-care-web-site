import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div>
      <h1 className="fw-bold fs-lg-9 fs-1 title-landing-section text-center mt-5">
        Medical Billing Services We Offer
      </h1>
      <div className="container col-lg-7 mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <div className="col">
            <img src="post1.png" alt="" className="img-fluid" />
            <p className="mt-3 mb-2 sub-title-services-section">
              CODING AND MEDICAL BILLING
            </p>
            <p className="description-services-section">
              Accurate medical billing and coding play a crucial role in
              securing reimbursements promptly. Precision is key; even minor
              errors can cause payment delays. At Right Medical Billing, our
              dedicated team ensures healthcare facilities receive rightful
              reimbursements from patients and payers for services rendered.
            </p>
          </div>
          <div className="col">
            <img src="post2.png" alt="" className="img-fluid" />
            <p className="mt-3 mb-2 sub-title-services-section">
              Streamlined Accounts Management
            </p>
            <p className="description-services-section">
              At Vcare Medical Billing, we proactively handle your practice's
              accounts receivable. Identifying any pending payments owed to the
              provider or healthcare facility, we diligently pursue outstanding
              balances from patients or payors. Timely payment posting ensures
              an efficient billing workflow.
            </p>
          </div>
          <div className="col">
            <img src="post3.png" alt="" className="img-fluid" />
            <p className="mt-3 mb-2 sub-title-services-section">
              Credentialing and Contract Foundation
            </p>
            <p className="description-services-section">
              Establishing a healthcare facility hinges on credentialing and
              contracting, forming the bedrock of relationships with both
              insurance companies and patients. At RMB, we negotiate insurance
              payer contracts and maintain their currency, enabling you to
              achieve optimal reimbursement rates.
            </p>
          </div>
          <div className="col">
            <img src="post4.png" alt="" className="img-fluid" />
            <p className="mt-3 mb-2 sub-title-services-section">
              Expert Out-of-Network Negotiations
            </p>
            <p className="description-services-section">
              At Vcare Medical Billing, we adeptly negotiate out-of-network
              claims with major pricing vendors like Multiplan, Zelis, Viant,
              and GCS. Leveraging decades of expertise, our negotiation and
              settlement team excels in this intricate aspect of billing. We're
              recognized industry-wide as specialists in out-of-network billing.
            </p>
          </div>
          <div className="col">
            <img src="post5.png" alt="" className="img-fluid" />
            <p className="mt-3 mb-2 sub-title-services-section">
              Eligibility and Insurance Verification
            </p>
            <p className="description-services-section">
              Accurate eligibility and insurance benefits verification are
              crucial for obtaining precise information on coverage and
              reimbursement. It's essential for healthcare facilities to confirm
              each patient's eligibility and benefits to secure payment for
              provided services. Count on us as an integral part of your team in
              this pivotal process.
            </p>
          </div>
          <div className="col">
            <img src="post6.png" alt="" className="img-fluid" />
            <p className="mt-3 mb-2 sub-title-services-section">
              Complete RCM Services
            </p>
            <p className="description-services-section">
              Vcare Medical Billing manages the entire revenue cycle, supporting
              from patient arrival to payment receipt. We assist in compliance,
              workflow, and staff training, acting as an extension of your team.
              Beyond financial relief, we enhance your RCM operations
              nationwide. Your success is our success, backed by expertise,
              tailored solutions,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
