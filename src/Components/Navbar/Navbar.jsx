import React from "react";
import "./Navbar.css";
import image from "../../assets/vitrendz-logo-new.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a
          classNameName="navbar-brand"
          href="https://vitrendz.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={image} alt="img" />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://ffcs.vitrendz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FFCS Planner
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="https://resources.vitrendz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resources
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="https://faculty.vitrendz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Faculty Review
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="https://labs.vitrendz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lab Records
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <nav classNameName="navbar navbar-expand-lg navbar-light">
            <div classNameName="container-fluid">
                <a classNameName="navbar-brand" href="https://vitrendz.com/">
                    <img src={image} alt="img" />
                </a>
                <button
                    classNameName="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span classNameName="navbar-toggler-icon"></span>
                </button>
                <div classNameName="collapse navbar-collapse" id="navbarNav">
                    <ul classNameName="navbar-nav ms-auto">
                        <li classNameName="nav-item">
                            <a
                                classNameName="nav-link"
                                href="https://vitrendz.com/"
                            >
                                About us
                            </a>
                        </li>
                        <li classNameName="nav-item">
                            <a
                                classNameName="nav-link"
                                href="https://vitrendz.com/"
                            >
                                Services
                            </a>
                        </li>

                        <li classNameName="nav-item">
                            <a
                                classNameName="nav-link"
                                aria-current="page"
                                href="https://community.vitrendz.com/"
                            >
                                Community
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */
}
