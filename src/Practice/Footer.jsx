import React from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AboutUs from '../Components/info/AboutUs';
import CustomerService from '../Components/info/CustomerService';
import ShopCategories from '../Components/info/ShopCategories';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3">
      <div className="container">
        <div className="row g-3">
          <div className="col-md-3 mb-2">
            <AboutUs />
            <NavLink to="/about-us" className="text-white-50 small">View full About Us page</NavLink>
          </div>

          <div className="col-md-3 mb-2">
            <CustomerService />
            <NavLink to="/customer-service" className="text-white-50 small">View full support page</NavLink>
          </div>

          <div className="col-md-3 mb-2">
            <ShopCategories />
            <NavLink to="/shop-categories" className="text-white-50 small">Browse all categories</NavLink>
          </div>

          {/* Social Media & Payment Methods */}
          <div className="col-md-3 mb-2">
            <h5>Follow Us</h5>
            <div className="d-flex gap-2 mt-2 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white p-2 rounded-circle bg-light bg-opacity-10" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white p-2 rounded-circle bg-light bg-opacity-10" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white p-2 rounded-circle bg-light bg-opacity-10" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white p-2 rounded-circle bg-light bg-opacity-10" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
            <hr />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p>&copy; 2025 Your E-Commerce Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
