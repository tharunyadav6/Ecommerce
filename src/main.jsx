import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
// import { AuthProvider } from "./Components/AuthContext"; // Import AuthContext to manage authentication
import Header from "./Components/layout/Header";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import Cart from "./Components/cart/Cart";
// import Error from "./Components/Error";
import ProductsId from "./Components/products/ProductsId";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import { Provider } from 'react-redux'
import store from './Redux/Store'  
import Trends from "./Components/products/Trends";
import OrderConfirmation from "./Components/cart/OrderConfirmation";
import WishtleCom from "./Components/wishlist/WishtleCom";
import AboutUs from "./Components/info/AboutUs";
import CustomerService from "./Components/info/CustomerService";
import ShopCategories from "./Components/info/ShopCategories";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';


// import CreateAccount from "./Components/CreateAccount";  // Import CreateAccount component
// import ProtectedRoute from "./Components/ProtectedRoute";
import Body from "./Practice/Body";
// import ForgotPassword from "./Components/ForgotPassword";  // Import ForgotPassword component

// Layout component for common structure (e.g., Header)
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const isLoggedIn = () => Boolean(localStorage.getItem("token"));

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" replace />;
};

const AppGate = () => {
  return isLoggedIn() ? <AppLayout /> : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  return isLoggedIn() ? <Navigate to="/" replace /> : children;
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppGate />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "Trends",
        element: <Trends />,
      },
      {
        path: "wishlist",
        element: <WishtleCom />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:ProId",
        element: <ProductsId />,
      },
      {
        path: "p",
        element: <OrderConfirmation />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "customer-service",
        element: <CustomerService />,
      },
      {
        path: "shop-categories",
        element: <ShopCategories />,
      }
    ],
  },
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>, // Route for Login page
  },
  {
    path: "/signup",
    element: <PublicRoute><Signup /></PublicRoute>, // Route for Signup page
  },
  {
    path: "*",
    element: <Navigate to={isLoggedIn() ? "/" : "/login"} replace />,
  },
]);

// Rendering the app with AuthContext and RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
     
  
);
