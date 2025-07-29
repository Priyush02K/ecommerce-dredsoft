import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4 py-4">
        <h1 className="text-center fw-bold">About Us</h1>
        <hr className="w-25 mx-auto mb-4" />
        
        <p className="lead text-center px-3">
          Welcome to our store! We specialize in delivering top-quality products
          across a wide range of categories. From fashion to electronics, every item
          is curated to bring value and style to your lifestyle.
          <br /><br />
          We believe in exceptional customer service, fast delivery, and products that
          speak quality. Our team is dedicated to creating a seamless shopping
          experience for everyone. Whether you're looking for everyday essentials
          or unique finds, we've got you covered.
        </p>

        <h2 className="text-center py-5 fw-semibold">Our Product Categories</h2>
        <div className="row g-4">
          {[
            {
              title: "Men's Clothing",
              img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              title: "Women's Clothing",
              img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              title: "Jewelery",
              img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              title: "Electronics",
              img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          ].map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={item.img}
                    className="card-img-top img-fluid"
                    alt={item.title}
                    style={{ objectFit: "cover", height: "100%", transition: "transform 0.4s" }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-semibold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
