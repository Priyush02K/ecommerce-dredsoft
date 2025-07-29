import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center mb-4">Login</h1>
        <hr className="w-25 mx-auto mb-4" />

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-sm-10">
            <form>
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
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <p className="mb-0">
                  New here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-primary"
                  >
                    Register
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-dark w-100 py-2"
                  type="submit"
                  disabled
                  title="Login disabled (demo only)"
                >
                  Login
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

export default Login;
