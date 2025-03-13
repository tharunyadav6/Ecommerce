import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder, cancelOrder } from "../Redux/Slices/orderSlice";
import OrderTracking from "../Components/Ordertracking";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const [address, setAddress] = useState("123 Main Street, City, Country");
  const [isEditing, setIsEditing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [orderId, setOrderId] = useState(null);

  // ✅ Get User Location and Convert to Address
  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            );
            const data = await response.json();
            setUserLocation({
              lat,
              lng,
              address: data.display_name, // Convert Lat/Lng to Address
            });
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        },
        (error) => {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // ✅ Confirm Order and Save to Redux
  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    const newOrder = {
      items: orders.flat(),
      orderId: `ORD-${Date.now()}`,
      status: "Processing",
      location: userLocation || { address }, // Use User Location or Default Address
    };

    dispatch(placeOrder(newOrder)); // Store Order in Redux
    setOrderId(newOrder.orderId); // Set Order ID for Tracking
    alert(`Order placed successfully! Order ID: ${newOrder.orderId}`);
  };

  // ❌ Cancel Order Function
  const handleCancelOrder = () => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      dispatch(cancelOrder(orderId)); // Remove from Redux Store
      setOrderId(null); // Reset Order ID
      alert("Order has been canceled.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Order Confirmation</h2>

      {/* ✅ Shipping Address Section */}
      <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>Shipping Address</h3>
        {isEditing ? (
          <div>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
              rows="3"
            />
            <button onClick={() => setIsEditing(false)} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Save Address
            </button>
          </div>
        ) : (
          <div>
            <p>{userLocation ? userLocation.address : address}</p>
            <button onClick={() => setIsEditing(true)} style={{ backgroundColor: "#007BFF", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Edit Address
            </button>
            <button onClick={handleGetLocation} style={{ marginLeft: "10px", backgroundColor: "#FF9800", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Use Current Location
            </button>
          </div>
        )}
      </div>

      {/* ✅ Orders Section */}
      {orders.length === 0 ? (
        <p style={{ textAlign: "center" }}>No orders placed yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {orders.map((order, index) => (
            <li key={index} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "15px", marginBottom: "15px" }}>
              <h3>Order {index + 1}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {Array.isArray(order) ? (
                  order.map((item) => (
                    <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                      <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                      <span>{item.title} - ${item.price}</span>
                    </li>
                  ))
                ) : (
                  <p>No items in the order.</p>
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}

      {/* ✅ Payment Options */}
      {orders.length > 0 && (
        <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", marginTop: "20px" }}>
          <h3>Payment Options</h3>
          <div>
            <label>
              <input type="radio" name="paymentMethod" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} /> Cash on Delivery
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="paymentMethod" value="online" checked={paymentMethod === "online"} onChange={(e) => setPaymentMethod(e.target.value)} /> Online Payment
            </label>
          </div>
          <button onClick={handleConfirmOrder} style={{ marginTop: "10px", backgroundColor: "#4CAF50", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
            Confirm Order
          </button>
        </div>
      )}

      {/* ✅ Order Tracking & Cancel Order Button */}
      {orderId && (
        <div style={{ marginTop: "20px" }}>
          <h2>Order Confirmed!</h2>
          <p>Your Order ID: <strong>{orderId}</strong></p>
          <OrderTracking orderId={orderId} />

          {/* ❌ Cancel Order Button */}
          <button onClick={handleCancelOrder} style={{ marginTop: "10px", backgroundColor: "#F44336", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
            Cancel Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
