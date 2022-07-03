import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="hover-link">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="hover-link">
            <Link className="nav-link" to={"/tourism"}>
              Tourism
            </Link>
          </li>
          <li className="hover-link">
            <Link className="nav-link" to={"/fitness"}>
              Fitness
            </Link>
          </li>
          <li className="hover-link">
            <Link className="nav-link" to={"/technology"}>
              Technology
            </Link>
          </li>
          <li className="hover-link">
            <Link className="nav-link" to={"/bollywood"}>
              Bollywood
            </Link>
          </li>
          <li className="hover-link">
            <Link className="nav-link" to={"/food"}>
              Food
            </Link>
          </li>
        </ul>
      <hr />
      </nav>
    </>
  );
};

export default NavBar;

//  <div className="navbar-nav">

//    <Link className="nav-link" to="/tourism">
//      <span>Tourism</span>
//    </Link>
//    <Link className="nav-link" to="/fitness">
//      <span>Fitness</span>
//    </Link>
//    <Link className="nav-link" to="/technology">
//      <span>Technology</span>
//    </Link>
//    <Link className="nav-link" to="/bollywood">
//      <span>Bollywood</span>
//    </Link>
//    <Link className="nav-link" to="/food">
//      <span>Food</span>
//    </Link>
//  </div>;
