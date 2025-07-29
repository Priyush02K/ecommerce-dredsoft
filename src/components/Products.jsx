import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/");
        const products = await response.json();
        if (isMounted) {
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      } catch (error) {
        toast.error("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return Array(6)
      .fill()
      .map((_, i) => (
        <div className="col-md-4 col-sm-6 col-12 mb-4" key={i}>
          <Skeleton height={400} />
        </div>
      ));
  };

  const ShowProducts = () => (
    <>
  <div className="buttons text-center py-4">
  {["All", "men's clothing", "women's clothing", "jewelery", "electronics"].map((cat, i) => (
    <button
      key={i}
      className="btn btn-outline-dark btn-sm mx-2 px-3 py-2  shadow-sm"
      onClick={() => (cat === "All" ? setFilter(data) : filterProduct(cat))}
      style={{
        borderRadius: "6px", // 👈 small rounded corners
        fontSize: "0.9rem",
        fontWeight: "500",
      }}
    >
      {cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  ))}
</div>

      {filter.map((product) => (
        <div
          className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex"
          key={product.id}
        >
          <div className="card shadow-sm w-100 hover-shadow h-100">
            <img
              src={product.image}
              className="card-img-top p-4"
              alt={product.title}
              style={{ height: "300px", objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title fw-bold">
                {product.title.length > 50
                  ? product.title.slice(0, 50) + "..."
                  : product.title}
              </h6>
              <p className="card-text text-muted small flex-grow-1">
                {product.description.length > 90
                  ? product.description.slice(0, 90) + "..."
                  : product.description}
              </p>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-dark fs-5 fw-semibold">${product.price}</span>
                <span
                  className={`badge ${
                    product.rating.count < 50 ? "bg-danger" : "bg-success"
                  }`}
                >
                  {product.rating.count < 50 ? "Out of Stock" : "In Stock"}
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <Link to={`/product/${product.id}`} className="btn btn-outline-dark btn-sm">
                  View
                </Link>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => addProduct(product)}
                  disabled={product.rating.count < 50}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="container my-5 py-4">
      <h2 className="display-5 text-center mb-4">Latest Products</h2>
      <hr className="mb-5" />
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
