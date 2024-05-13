import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer justify-content-center d-flex align-items-center p-5">
        <div className="row container ">
          <div className="col-lg-3">
            <p className="subtitles-footer">Contact</p>
            <p>000000000</p>
            <p>vcare@business.com</p>
            <p>5530 Long Prairie Trace, Suite 600, Richmond, TX 77407</p>
          </div>
          <div className="col-lg-3 d-flex flex-column">
            <p className="subtitles-footer">Our Hours</p>
            <div className="schedules-footer text-center p-2 rounded-2 mb-2">
              <p className="mb-0">Monday - Friday</p>
              <p className="mb-0 fw-bold">8:30 AM - 5:00 AM</p>
            </div>
            <div className="schedules-footer text-center p-2 rounded-2">
              <p className="mb-0">Saturday, Sunday</p>
              <p className="mb-0 fw-bold">Closed</p>
            </div>
          </div>
          <div className="col-lg-3">
            <p className="subtitles-footer">Our Services</p>
            <p className="mb-0 fw-bold fs-16">Medical Billing and Coding</p>
            <p className="mb-0 fw-bold fs-16">Credentialing & Contracting</p>
            <p className="mb-0 fw-bold fs-16">Out of Network Negotiations</p>
            <p className="mb-0 fw-bold fs-16">Eligibility Verification</p>
            <p className="mb-0 fw-bold fs-16">Patient billing services</p>
          </div>
          <div className="col-lg-3">
            <img src="footer-logo.png" alt="" />
          </div>
        </div>
      </div>
      <p className="text-center p-3 mb-0 d-flex align-items-center justify-content-center footer copyright-footer">
        © Copyright 2023 Vcare Medical Billing - All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
