 
 import React, { useEffect, useState } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { updateOrderStatus } from "../Redux/Slices/orderSlice";
 
 const OrderTracking = ({ orderId }) => {
   const dispatch = useDispatch();
   const order = useSelector((state) => state.order.orders.find(order => order.orderId === orderId));
   const [currentLocation, setCurrentLocation] = useState(order?.location || null);
   const [address, setAddress] = useState(order?.location?.address || "Fetching...");
 
   useEffect(() => {
     const fetchAddress = async (lat, lng) => {
       try {
         const response = await fetch(
           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
         );
         const data = await response.json();
         setAddress(data.display_name);
       } catch (error) {
         console.error("Error fetching address:", error);
       }
     };
 
     const interval = setInterval(() => {
       if (order && order.status !== "Delivered") {
         const newLocation = {
           lat: currentLocation ? currentLocation.lat + 0.0001 : 12.9723, // Simulated update
           lng: currentLocation ? currentLocation.lng + 0.0001 : 77.5950,
         };
 
         setCurrentLocation(newLocation);
         fetchAddress(newLocation.lat, newLocation.lng); // Get new address
 
         dispatch(updateOrderStatus({
           orderId,
           newStatus: order.status === "Processing" ? "Out for Delivery" : "Delivered",
           location: { ...newLocation, address },
         }));
       }
     }, 5000); // Update every 5 seconds
 
     return () => clearInterval(interval);
   }, [order, dispatch, currentLocation, orderId]);
 
   if (!order) {
     return <p>Order not found.</p>;
   }
 
   return (
     <div>
       <h3>Tracking Order: {orderId}</h3>
       <p>Status: {order.status}</p>
       <p>Current Location: {address}</p>
     </div>
   );
 };
 
 export default OrderTracking;
 




// import React from "react";
// import { useSelector } from "react-redux";

// const OrderTracking = ({ orderId }) => {
//   const orders = useSelector((state) => state.order.orders);

//   // Find the order with the given orderId
//   const order = orders.find((order) => order.orderId === orderId);

//   if (!order) {
//     return <p style={{ color: "red" }}>Order not found!</p>;
//   }

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "15px",
//         borderRadius: "5px",
//         marginTop: "20px",
//       }}
//     >
//       <h3>Tracking Order ID: {orderId}</h3>
//       <p>Status: {order.status || "Processing"}</p>

//       <h4>Ordered Items:</h4>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {Array.isArray(order.items) ? (
//           order.items.map((item) => (
//             <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//               <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "5px" }} />
//               <span>{item.title} - ${item.price}</span>
//             </li>
//           ))
//         ) : (
//           <p>No items found in the order.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default OrderTracking;
