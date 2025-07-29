import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">
          🛍️ React Ecommerce
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item px-2">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-white" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex flex-wrap justify-content-center">
            <NavLink to="/login" className="btn btn-outline-light m-2">
              <i className="fa fa-sign-in-alt me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-light m-2">
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-light m-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar