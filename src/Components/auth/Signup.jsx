// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword) {
//       setMessage("Please fill in all fields.");
//       return;
//     }

//     if (password.length < 6) {
//       setMessage("Password should be at least 6 characters long.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/user", {
//         name,
//         email,
//         password,
//       });

//       setMessage(response.data.message || "Signup successful");
//       setName('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');

//       setTimeout(() => {
//         navigate("/login");
//       }, 800);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: "420px" }}>
//         <h2 className="text-center mb-3">Create Account</h2>
//         <p className="text-muted text-center mb-4">Register with the backend and start shopping.</p>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Full Name</label>
//             <input
//               id="name"
//               type="text"
//               className="form-control"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               id="email"
//               type="email"
//               className="form-control"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               id="password"
//               type="password"
//               className="form-control"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               id="confirmPassword"
//               type="password"
//               className="form-control"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Sign Up</button>
//         </form>

//         {message && (
//           <div className="alert alert-info mt-3 mb-0" role="alert">
//             {message}
//           </div>
//         )}

//         <p className="text-center text-muted small mt-3 mb-0">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
   const [isSuccess, setIsSuccess] = useState(false);
  
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/user",
        {
          name,
          email,
          password,
        }
      );

      setMessage(response.data.message);
      setIsSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup Failed");
      setIsSuccess(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <div className="auth-hero">
          <p className="auth-badge">Start shopping</p>
          <h1>Create your account and enjoy a premium shopping experience.</h1>
          <p className="auth-copy">
            Join thousands of shoppers who save favourites, receive updates, and checkout faster.
          </p>
          <ul className="auth-highlights">
            <li>Free account setup</li>
            <li>Secure password protection</li>
            <li>Personalized recommendations</li>
          </ul>
        </div>

        <div className="auth-card">
          <div className="auth-card__header">
            <p className="auth-label">Signup</p>
            <h2>Create your account</h2>
            <p className="auth-subtext">Fill in a few details to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-field">
              <span>Full Name</span>
              <input
                type="text"
                placeholder="John Doe"
                className="auth-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

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
                placeholder="Minimum 6 characters"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {password.length > 0 && password.length < 6 && (
                <p className="auth-message auth-message--error">Password should be at least 6 characters long.</p>
              )}
            </label>

            <button type="submit"  disabled={password.length < 6 ? true : false} className="auth-button auth-button--success">Create Account</button>
          </form>

            {message && (
            <p
              className={`auth-message ${isSuccess ? "auth-message--success" : "auth-message--error"
                }`}
            >
              {message}
            </p>
          )}

          <p className="auth-footer-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;