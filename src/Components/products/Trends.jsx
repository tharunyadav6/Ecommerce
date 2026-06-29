import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Trends = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        
        const response = await fetch( 'https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    loadProducts();
  }, []);

  const trendProducts = products.filter((item) =>
    ['men', 'women', 'jewelery'].some((keyword) =>
      item.category.toLowerCase().includes(keyword)
    )
  );

  return (
    <section className="trends-page">
      <div className="trends-container">
        <div className="trends-header mb-4">
          <div>
            <p className="trends-title">Trending now</p>
            <h2 className="trends-heading">Fresh fashion picks for the season</h2>
            <p className="trends-text">
              Explore the latest clothing and style trends inspired by the products shown on the main shop page.
            </p>
          </div>
          
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="trend-card-box">
              <h4 className="mb-2">Why this page matters</h4>
              <p style={{ color: '#e5e7eb', marginBottom: 0 }}>
                These trend cards are based on the same product feed used in the body section, so the styles feel connected to your shopping app.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="trend-highlight-box">
              <h4 className="mb-2">This week’s vibe</h4>
              <p style={{ marginBottom: 0, fontWeight: '600' }}>
                Casual comfort, bold layers, and smart accessories for everyday style.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-3">
          {trendProducts.length > 0 ? (
            trendProducts.slice(0, 8).map((item) => (
              <div key={item.id} className="col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 trend-product-card">
                  <img src={item.image} alt={item.title} className="trend-image" />
                  <div className="card-body d-flex flex-column">
                    <span className="text-uppercase small text-muted">{item.category}</span>
                    <h5 className="card-title trend-product-title">{item.title}</h5>
                    <p className="text-muted small mb-3">Trending style • Fresh for the season</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <strong className="trend-price">$ {item.price}</strong>
                      <Link to={`/products/${item.id}`} className="btn btn-sm btn-dark">View</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-light mb-0">Loading trend products...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Trends;
