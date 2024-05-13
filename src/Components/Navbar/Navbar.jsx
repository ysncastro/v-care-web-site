import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md nav-personalizada px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className="m-0">
              <img
                className="d-block"
                src="vcare-logo.png"
                alt="Logo da loja Meteora"
              />
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mx-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Benefits
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <a className="btn button-contact-us" href="#" role="button">
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
