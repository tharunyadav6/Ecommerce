import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isLoggedin", "true");

      setMessage("Login Successful");
      setIsSuccess(true);

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login Failed"
      );
      setIsSuccess(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <div className="auth-hero">
          <p className="auth-badge">Welcome back</p>
          <h1>Shop smarter with your personalized account.</h1>
          <p className="auth-copy">
            Track orders, save favourites, and enjoy a smooth shopping experience every time you return.
          </p>
          <ul className="auth-highlights">
            <li>Fast checkout</li>
            <li>Saved wishlist</li>
            <li>Secure access</li>
          </ul>
        </div>

        <div className="auth-card">
          <div className="auth-card__header">
            <p className="auth-label">Login</p>
            <h2>Sign in to your account</h2>
            <p className="auth-subtext">Use your email and password to continue shopping.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-field">
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="auth-button">Login</button>
          </form>

          {/* { message  && <p className="auth-message auth-message--error">{message}</p>} */}
          {message && (
            <p
              className={`auth-message ${isSuccess ? "auth-message--success" : "auth-message--error"
                }`}
            >
              {message}
            </p>
          )}

          <p className="auth-footer-text">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;