import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-bottom pb-3">
        <div className="container-fluid px-0">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <img
                  src="./assets/banner_1.png"
                  className="d-block w-100"
                  alt="First slide"
                  style={{
                    height: "80vh",
                    objectFit: "cover",
                  }}
                />
                <div className="carousel-caption h-100 d-flex align-items-center text-start">
                  <div className="container">
                    <h5 className="fs-1 fw-light text-white">New Season Arrivals</h5>
                    <p className="fs-5 d-none d-sm-block">
                      Discover the latest trends in our brand new collection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <img
                  src="./assets/banner_2.png"
                  className="d-block w-100"
                  alt="Second slide"
                  style={{
                    height: "80vh",
                    objectFit: "cover",
                  }}
                />
                <div className="carousel-caption h-100 d-flex align-items-center text-start">
                  <div className="container">
                    <h5 className="fs-1 fw-light text-white">Trendy & Comfortable</h5>
                    <p className="fs-5 d-none d-sm-block">
                      Shop clothes that make you feel confident and comfy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <img
                  src="./assets/banner_3.png"
                  className="d-block w-100"
                  alt="Third slide"
                  style={{
                    height: "80vh",
                    objectFit: "cover",
                  }}
                />
                <div className="carousel-caption h-100 d-flex align-items-center text-start">
                  <div className="container">
                    <h5 className="fs-1 fw-light text-white">Limited Time Offers</h5>
                    <p className="fs-5 d-none d-sm-block">Grab deals before they’re gone!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
