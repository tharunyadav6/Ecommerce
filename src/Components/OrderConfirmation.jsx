import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder, cancelOrder } from "../Redux/Slices/orderSlice";
import OrderTracking from "../Components/Ordertracking";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const [address, setAddress] = useState("123 Main Street, City, Country");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedPaymentApp, setSelectedPaymentApp] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  // ✅ Get Current Location and Fetch Address
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data.display_name) {
              setAddress(data.display_name); // Set human-readable address
            } else {
              setAddress(`Latitude: ${latitude}, Longitude: ${longitude}`);
            }
          } catch (error) {
            alert("Error fetching address, using coordinates instead.");
            setAddress(`Latitude: ${latitude}, Longitude: ${longitude}`);
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

  // ✅ Handle Order Placement
  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    if (paymentMethod === "cod") {
      alert("Order placed successfully!");
      placeOrderAndSetId("Cash on Delivery");
    } else if (paymentMethod === "online" && selectedPaymentApp) {
      handleOnlinePayment();
    } else {
      alert("Please select a payment app!");
    }
  };

  // ✅ Simulate Online Payment
  const handleOnlinePayment = () => {
    setTimeout(() => {
      setIsPaid(true);
      alert("Payment successful! Order placed successfully.");
      placeOrderAndSetId(selectedPaymentApp);
    }, 2000);
  };

  // ✅ Place Order and Store in Redux
  const placeOrderAndSetId = (paymentApp) => {
    const newOrder = {
      orderId: `ORD-${Date.now()}`,
      status: "Processing",
      location: address,
      paymentApp: paymentApp,
    };

    dispatch(placeOrder(newOrder));
    setOrderId(newOrder.orderId);
  };

  // ✅ Handle Refund
  const handleRefund = () => {
    if (window.confirm("Are you sure you want to request a refund?")) {
      setIsPaid(false);
      alert("Refund processed successfully.");
      setOrderId(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Order Confirmation</h2>

      {/* ✅ Address Section with "Use My Location" */}
      <div style={{ marginBottom: "15px" }}>
        <h3>Delivery Address</h3>
        <textarea 
          value={address} 
          onChange={(e) => setAddress(e.target.value)}
          rows="2" 
          style={{ width: "100%", padding: "5px" }} 
        />
        <button onClick={handleGetLocation} 
          style={{ marginTop: "10px", backgroundColor: "#008CBA", color: "white", padding: "8px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Use My Current Location 📍
        </button>
      </div>

      {/* ✅ Payment Options */}
      {orders.length > 0 && (
        <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px" }}>
          <h3>Payment Options</h3>
          <div>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="cod" 
                checked={paymentMethod === "cod"} 
                onChange={(e) => { setPaymentMethod(e.target.value); setSelectedPaymentApp(""); setIsPaid(false); }} 
              />
              Cash on Delivery
            </label>
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="online" 
                checked={paymentMethod === "online"} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Online Payment
            </label>
          </div>

          {/* Show Payment App Options if Online Payment is selected */}
          {paymentMethod === "online" && (
            <div style={{ marginTop: "10px" }}>
              <h4>Select Payment App:</h4>
              <select 
                value={selectedPaymentApp} 
                onChange={(e) => setSelectedPaymentApp(e.target.value)}
                style={{ padding: "5px", width: "100%", marginBottom: "10px" }}
              >
                <option value="">Select App</option>
                <option value="PhonePe">PhonePe</option>
                <option value="Paytm">Paytm</option>
                <option value="Google Pay">Google Pay</option>
              </select>
            </div>
          )}

          {/* ✅ Confirm Order Button */}
          <button onClick={handleConfirmOrder} 
            style={{ marginTop: "10px", backgroundColor: "#4CAF50", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
            {paymentMethod === "online" ? "Pay" : "Place Order"}
          </button>
        </div>
      )}

      {/* ✅ Order Tracking, Cancel, and Refund Buttons */}
      {orderId && (
        <div style={{ marginTop: "20px" }}>
          <h2>Order Confirmed!</h2>
          <p>Your Order ID: <strong>{orderId}</strong></p>
          <p><strong>Delivery Location:</strong> {address}</p>
          <OrderTracking orderId={orderId} />

          {/* ❌ Cancel Order Button */}
          <button onClick={() => dispatch(cancelOrder(orderId))} 
            style={{ marginTop: "10px", backgroundColor: "#F44336", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
            Cancel Order
          </button>

          {/* 🔄 Refund Button (Only after Payment) */}
          {isPaid && (
            <button onClick={handleRefund} 
              style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "#FF9800", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Refund
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
