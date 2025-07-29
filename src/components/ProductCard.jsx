// components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addProduct }) => {
  const isOutOfStock = product.rating?.count === 0;

  return (
    <div className="card shadow-sm border-0 rounded-4 mx-3 my-3" style={{ width: "280px", minHeight: "460px" }}>
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-4"
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="text-truncate">{product.title}</h6>
        <p className="text-muted small text-uppercase mb-1">Category: {product.category}</p>
        <h5 className="text-primary fw-bold">${product.price}</h5>

        <label htmlFor={`variant-${product.id}`} className="form-label small fw-bold mt-2">
          Variant
        </label>
        <select className="form-select" id={`variant-${product.id}`}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        {isOutOfStock ? (
          <button className="btn btn-secondary mt-3" disabled>Out of Stock</button>
        ) : (
          <button className="btn btn-dark mt-3" onClick={() => addProduct(product)}>
            Add to Cart
          </button>
        )}

        <Link to={`/product/${product.id}`} className="btn btn-outline-dark mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
