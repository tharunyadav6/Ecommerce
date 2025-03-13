import React from 'react';
import { NavLink } from 'react-router-dom';

const Title = () => {
  return (
    <div className="logo">
      <img 
        src="https://r2.erweima.ai/imgcompressed/compressed_910b3eef6a32c1aadce288c6c1409c39.webp"
        alt="logo" 
      />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav">
        <ul>
          <NavLink to="/" activeClassName="active"><li>Home</li></NavLink>
          <NavLink to="/Trends" activeClassName="active"><li>Trends</li></NavLink>
          <NavLink to='/cart' activeClassName="active"><li>Cart</li></NavLink>
          <NavLink to='/login' activeClassName="active"><li>Logout</li></NavLink>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
