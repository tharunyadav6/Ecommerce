import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>Your Company offers the best deals on a wide variety of products. Shop now and experience convenience like never before.</p>
          </div>

          {/* Customer Service */}
          <div className="col-md-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">FAQs</a></li>
              <li><a href="#" className="text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="text-white">Shipping Info</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3">
            <h5>Shop Categories</h5>
            <ul className="list-unstyled" >
              <li><a href="#" className="text-white">Men's Clothing</a></li>
              <li><a href="#" className="text-white">Women's Clothing</a></li>
              <li><a href="#" className="text-white">Electronics</a></li>
              <li><a href="#" className="text-white">Home Appliances</a></li>
            </ul>
          </div>

          {/* Social Media & Payment Methods */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
            <hr />
           
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>&copy; 2025 Your E-Commerce Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
