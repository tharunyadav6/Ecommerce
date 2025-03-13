import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductsCard from "./ProductsCard";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./Footer";
 
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const json = await response.json();
        setProducts(json);
        setFilteredProducts(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <NavLink to="/Trends" >
        {/* Carousel */}
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src="https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg"
                className="img-fluid d-block w-100" 
                alt="img.jpg"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://img.freepik.com/free-vector/flat-design-fashion-stylist-facebook-cover_23-2150007838.jpg?t=st=1714477825~exp=1714481425~hmac=7320e8de832fa006893899c631a1896a2e34e219159c0e00dfbfc6c2f9e8b038&w=1380"
                className="img-fluid d-block w-100" 
                alt="Fashion Banner 2"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://img.freepik.com/free-vector/geometric-fashion-collection-facebook-cover_23-2149977424.jpg?w=1380&t=st=1714481341~exp=1714481941~hmac=a29cb85c1d96b1ed6d9dc50f85aa69a91f7446e1d92e6110d875d3405cc76eed"
                className="img-fluid d-block w-100" 
                alt="Fashion Banner 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </NavLink>

      {/* Search Input */}
      <div className="filter">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Products List */}
      <div className="Rbody">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductsCard
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </Link>
            
          ))
          
        ) : (
           <p>loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Body;
