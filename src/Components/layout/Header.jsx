 import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Title = () => {
  return (
    <div className="logo">
      <img
        src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg"
        alt="logo"
      />
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedin");

      navigate("/login");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <Title />

      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/Trends">Trends</NavLink>
          </li>

          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>

          <li
            onClick={handleAuth}
            style={{
              cursor: "pointer",
              color: "#e5e7eb",
              fontWeight: "600",
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;