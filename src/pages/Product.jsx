import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

 const ShowProduct = () => {
  return (
    <>
      <div className="container my-5 py-4">
        <div className="row align-items-center g-4">
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <img
              className="img-fluid rounded shadow-sm"
              src={product.image}
              alt={product.title}
              style={{
                maxHeight: "420px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h6 className="text-uppercase text-muted mb-2">
              {product.category}
            </h6>
            <h2 className="fw-semibold mb-3">{product.title}</h2>
            <div className="mb-2 text-warning">
              {product.rating && (
                <>
                  <strong>{product.rating.rate}</strong>{" "}
                  <i className="fa fa-star"></i>
                </>
              )}
            </div>
            <h3 className="text-primary fw-bold mb-4">
              ${product.price.toFixed(2)}
            </h3>
            <p className="text-secondary mb-4" style={{ lineHeight: "1.6" }}>
              {product.description}
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button
                className="btn btn-outline-primary px-4"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-primary px-4">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Similar Products */}
      {similarProducts.length > 0 && (
        <div className="container my-5">
          <h4 className="mb-4">You may also like</h4>
          <div className="d-flex flex-wrap gap-4 justify-content-start">
            {similarProducts.map((item) => (
              <ProductCard key={item.id} product={item} addProduct={addProduct} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};


  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
  return (
    <div className="py-4 my-4">
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {similarProducts.map((item) => (
          <div
            key={item.id}
            className="card shadow-sm border-0 rounded-4 text-center"
            style={{ width: "260px", minHeight: "420px" }}
          >
            <div className="overflow-hidden rounded-top-4">
              <img
                className="card-img-top p-3 hover-zoom"
                src={item.image}
                alt={item.title}
                style={{
                  height: "220px",
                  objectFit: "contain",
                  transition: "transform 0.4s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <div className="card-body">
              <h6 className="card-title text-truncate">
                {item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}
              </h6>
              <p className="text-muted fw-semibold mb-2">${item.price.toFixed(2)}</p>
              <div className="d-flex justify-content-center gap-2">
                <Link to={`/product/${item.id}`} className="btn btn-outline-primary btn-sm">
                  Buy Now
                </Link>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
