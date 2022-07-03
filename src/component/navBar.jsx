import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const NavBar = () => {
  return (
    <div className="table">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                <span>Home</span>
              </Link>
              <Link className="nav-link" to="/tourism">
                <span>Tourism</span>
              </Link>
              <Link className="nav-link" to="/fitness">
                <span>Fitness</span>
              </Link>
              <Link className="nav-link" to="/technology">
                <span>Technology</span>
              </Link>
              <Link className="nav-link" to="/bollywood">
                <span>Bollywood</span>
              </Link>
              <Link className="nav-link" to="/food">
                <span>Food</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
