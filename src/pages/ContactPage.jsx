import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center mb-4">Contact Us</h1>
        <hr className="w-25 mx-auto mb-4" />

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-sm-10">
            <form>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="Message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-dark px-4"
                  disabled
                  title="Form submission disabled (demo only)"
                >
                  Send Message
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

export default ContactPage;
