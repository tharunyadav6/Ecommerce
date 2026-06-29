import React from 'react';

const CustomerService = () => {
  return (
    <section style={{ minHeight: 'auto', background: '#0f172a', color: '#fff', padding: '18px 12px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Customer Service</h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.5, marginBottom: '10px', fontSize: '0.95rem' }}>
          Need help with your order or shopping experience? Our support team is ready to assist you.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#e2e8f0', lineHeight: 1.8 }}>
          <li>📞 Contact Us</li>
          <li>❓ FAQs</li>
          <li>↩️ Returns & Exchanges</li>
          <li>🚚 Shipping Info</li>
          <li>📦 Track Your Order</li>
        </ul>
      </div>
    </section>
  );
};

export default CustomerService;
