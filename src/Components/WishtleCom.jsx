import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishList } from '../Redux/Slices/wishListSlice';
import { addToCart } from '../Redux/Slices/cartSlice'; // Ensure this action is imported

const Wishtle = () => {
  const wishListItems = useSelector((state) => state.wishList.items); // Get wishlist items from Redux state
  const dispatch = useDispatch();

  // Function to handle adding item to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));  // Add the item to the cart
    dispatch(removeFromWishList(item));  // Optionally, remove from wishlist after adding to cart
  };

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishListItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <ul>
          {wishListItems.map((item) => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              {/* Display the product image */}
              <img
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                style={{ marginRight: '20px' }}
              />
              {/* Display product title */}
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                {/* Add to Cart button without navigation */}
                <button onClick={() => handleAddToCart(item)}>Move to Bag</button>
              </div>

              {/* Remove from Wishlist button */}
              <button onClick={() => dispatch(removeFromWishList(item))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishtle;
