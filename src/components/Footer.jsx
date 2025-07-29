import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4 border-top mt-5">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Brand Info */}
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase fw-bold mb-4">React Ecommerce</h5>
            <p>
              Your one-stop shop for the latest fashion, electronics, and more.
              Discover trends, grab deals, and shop with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-dark text-decoration-none">Home</Link></li>
              <li><Link to="/product" className="text-dark text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-dark text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
            <div>
              <a href="/" className="text-dark me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-dark me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-dark me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-dark">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="my-4" />

        {/* Copyright */}
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-muted mb-0">
              &copy; {new Date().getFullYear()} React Ecommerce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
