import React from 'react';

const AboutUs = () => {
  return (
    <section style={{ minHeight: 'auto', background: '#111827', color: '#fff', padding: '18px 12px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>About Us</h2>
        <p style={{ color: '#d1d5db', lineHeight: 1.5, marginBottom: '10px', fontSize: '0.95rem' }}>
          Your trusted shopping destination for fashion, electronics, and home essentials.
          We focus on quality products, reliable delivery, and a smooth shopping experience.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#e5e7eb', lineHeight: 1.8 }}>
          <li>✔ Curated product collections</li>
          <li>✔ Secure and easy checkout</li>
          <li>✔ Friendly customer support</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
