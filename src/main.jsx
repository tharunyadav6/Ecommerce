import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { AuthProvider } from "./Components/AuthContext"; // Import AuthContext to manage authentication
import Header from "../src/Components/Header";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import Cart from "../src/Components/Cart";
// import Error from "./Components/Error";
import ProductsId from "../src/Components/ProductsId";
import Login from "../src/Components/Login";
import { Provider } from 'react-redux'
import store from './Redux/Store'  
import Trends from "../src/Components/Trends";
import OrderConfirmation from "./Components/OrderConfirmation";
import WishtleCom from "../src/Components/WishtleCom";


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

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />, // Protect the Body route (project content)
      },
      {
        path: "/Trends",
        element: <Trends/>, // Protectedroute for About page
      },
      {
        path: "/wishlist",
        element: <WishtleCom/>, // Protected route for Contact page
      },
      {
        path: "/cart",
        element: <Cart />, // Protected route for Cart page
      },
      {
        path: "products/:ProId",
        element: <ProductsId />, // Protected route for ProductsId page
      },
      {
        path:"/p",
        element: <OrderConfirmation/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />, // Route for Login page
  },
   

  
]);

// Rendering the app with AuthContext and RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
     
  
);
