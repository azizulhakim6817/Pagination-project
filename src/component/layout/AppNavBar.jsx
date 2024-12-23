import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const AppNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" width="50" height="auto" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active fw-bold"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <Link to="/" className="btn btn-info fw-bold" type="submit">
              Lore more
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
