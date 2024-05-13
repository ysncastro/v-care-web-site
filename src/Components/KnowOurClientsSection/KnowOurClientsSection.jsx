import "./KnowOurClientsSection.css";

function KnowOurClientsSection() {
  return (
    <div className="container know-our-clients-section-personalizada">
      <div className="row">
        <div className="col-lg-5">
          <div>
            <h1 className="fw-bold fs-lg-9 fs-1 title-landing-section">
              Know Our Clients
            </h1>
            <p className="fs-5 text-know-our-clients-section">
              As a trusted authority in medical billing, catering to a diverse
              spectrum of organizations, our industry- standing reputation is a
              testament to our reliability and expertise. Our tailored services
              cater to the unique billing needs of various entities, ensuring
              seamless operations and financial transparency.
            </p>
            <div className="d-grid gap-2 d-lg-flex">
              <a className="btn button-leave-a-message" href="#" role="button">
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div className="col">
              <img src="card.png" alt="" className="img-fluid" />
            </div>
            <div className="col">
              <img src="card-1.png" alt="" className="img-fluid" />
            </div>
            <div className="col">
              <img src="card-2.png" alt="" className="img-fluid" />
            </div>
            <div className="col">
              <img src="card-3.png" alt="" className="img-fluid" />
            </div>
            <div className="col">
              <img src="card-4.png" alt="" className="img-fluid" />
            </div>
            <div className="col">
              <img src="card-5.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowOurClientsSection;
