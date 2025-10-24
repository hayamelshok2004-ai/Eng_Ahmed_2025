import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container d-flex align-items-center">
        {/* شعار النادي + الاسم */}
        <Link className="navbar-brand d-flex align-items-center fw-bold text-dark" to="/">
          <img
            src="/logo_smoha.jpeg"
            alt="Smoha Logo"
            style={{
              width: "45px",
              height: "45px",
              marginRight: "10px",
              borderRadius: "50%",
              border: "2px solid #004aad",
              backgroundColor: "white",
            }}
          />
          Smoha Club
        </Link>

        {/* زر القائمة للموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* الروابط */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/Album">
                Album
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
