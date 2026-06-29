import React from 'react';

const ShopCategories = () => {
  return (
    <section style={{ minHeight: 'auto', background: '#1f2937', color: '#fff', padding: '18px 12px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Shop Categories</h2>
        <p style={{ color: '#e5e7eb', lineHeight: 1.5, marginBottom: '10px', fontSize: '0.95rem' }}>
          Explore the latest picks in style, technology, home essentials, and more.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#f3f4f6', lineHeight: 1.8 }}>
          <li>👕 Men's Clothing</li>
          <li>👗 Women's Clothing</li>
          <li>📱 Electronics</li>
          <li>🏠 Home Appliances</li>
          <li>💄 Beauty & Lifestyle</li>
        </ul>
      </div>
    </section>
  );
};

export default ShopCategories;
