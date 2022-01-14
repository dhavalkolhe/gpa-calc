import React from 'react';
import './Navbar.css';
import image from '../../assets/vitrendz-logo-new.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://vitrendz.com/">
                    <img src={image} alt="img" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://vitrendz.com/"
                            >
                                About us
                            </a>
                        </li>

                        {/* <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://vitrendz.com/"
                            >
                                Calculators
                            </a>   
                        </li> */}

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://vitrendz.com/"
                            >
                                Services
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="https://community.vitrendz.com/"
                            >
                                Community
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
