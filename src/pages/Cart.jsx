import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center rounded shadow-sm">
          <h4 className="p-3 display-5">🛒 Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mt-3">
            <i className="fa fa-arrow-left me-2"></i>Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => {
    let subtotal = 0;
    let totalItems = 0;
    const shipping = 30.0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-dark text-white">
                  <h5 className="mb-0">🧾 Items in Cart</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id}>
                      <div className="row align-items-center mb-3">
                        <div className="col-md-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-fluid rounded"
                            style={{ height: "75px", objectFit: "contain" }}
                          />
                        </div>
                        <div className="col-md-5">
                          <h6 className="fw-semibold">{item.title}</h6>
                          <p className="text-muted mb-0">
                            Price: ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-center">
                          <div className="d-flex align-items-center mb-2">
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => removeItem(item)}
                              title="Remove One"
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <span className="badge bg-dark mx-3 px-3 py-2">
                              {item.qty}
                            </span>
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => addItem(item)}
                              title="Add One More"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <small className="text-muted">
                            Total: ${(item.qty * item.price).toFixed(2)}
                          </small>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">💰 Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      Items ({totalItems}) <span>${subtotal.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      Shipping <span>${shipping.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between fw-bold">
                      Total <span>${(subtotal + shipping).toFixed(2)}</span>
                    </li>
                  </ul>
                  <Link
                    to="/checkout"
                    className="btn btn-dark w-100 mt-3"
                    title="Go to Checkout"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="text-center mb-4">🛍️ Your Shopping Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
