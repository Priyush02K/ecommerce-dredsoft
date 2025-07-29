import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => (
    <div className="container text-center py-5">
      <h4 className="display-6 mb-4">No item in Cart</h4>
      <Link to="/" className="btn btn-outline-dark">
        <i className="fa fa-arrow-left me-2"></i>Continue Shopping
      </Link>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-dark text-white">
                <h4 className="mb-0">Billing Address</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">First name</label>
                      <input type="text" className="form-control" id="firstName" required />
                      <div className="invalid-feedback">Valid first name is required.</div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">Last name</label>
                      <input type="text" className="form-control" id="lastName" required />
                      <div className="invalid-feedback">Valid last name is required.</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                      <div className="invalid-feedback">Please enter a valid email address.</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                      <div className="invalid-feedback">Please enter your shipping address.</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                      <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                    </div>

                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">Country</label>
                      <select className="form-select" id="country" required>
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                      <div className="invalid-feedback">Please select a valid country.</div>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">State</label>
                      <select className="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option>Maharashtra</option>
                        <option>Punjab</option>
                      </select>
                      <div className="invalid-feedback">Please provide a valid state.</div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="zip" required />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <h4 className="mb-3">Payment</h4>

                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="cc-name" className="form-label">Name on card</label>
                      <input type="text" className="form-control" id="cc-name" required />
                      <small className="text-muted">Full name as displayed on card</small>
                      <div className="invalid-feedback">Name on card is required</div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cc-number" className="form-label">Credit card number</label>
                      <input type="text" className="form-control" id="cc-number" required />
                      <div className="invalid-feedback">Card number is required</div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                      <input type="text" className="form-control" id="cc-expiration" required />
                      <div className="invalid-feedback">Expiration required</div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-cvv" className="form-label">CVV</label>
                      <input type="text" className="form-control" id="cc-cvv" required />
                      <div className="invalid-feedback">CVV required</div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <button className="w-100 btn btn-primary btn-lg" type="submit" disabled>
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-5 col-lg-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-light">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    Products ({totalItems}) <span>${Math.round(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Shipping <span>${shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>${Math.round(subtotal + shipping)}</strong>
                  </li>
                </ul>
                <p className="text-muted mt-3 mb-0">You will not be charged. This is a demo checkout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4 py-2">
        <h1 className="text-center mb-4">Checkout</h1>
        <hr />
        {state.length > 0 ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
