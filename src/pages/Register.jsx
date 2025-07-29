import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center">Register</h1>
        <hr className="w-25 mx-auto mb-4" />

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-sm-10">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter a strong password"
                  required
                />
              </div>

              <div className="mb-3">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-decoration-underline text-primary">
                    Login
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2"
                  disabled
                  title="Registration disabled (demo only)"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
