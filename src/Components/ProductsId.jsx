import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart } from '/src/Redux/slices/cartSlice';
import { addToWishList } from '/src/Redux/slices/wishListSlice';
 
const ProductsId = () => {
  const { ProId } = useParams(); // Get the ProId from the URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch(); // Initialize Redux dispatch

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${ProId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setSelectedSize(data.availableSizes ? data.availableSizes[0] : ''); // Set default size
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    };

    fetchProduct();
  }, [ProId]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value); // Update selected size
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          ...product,
          selectedSize, // Add selected size to the product
        })
      );
      alert(`${product.title} has been added to the cart!`);
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      dispatch(addToWishList(product));
      alert(`${product.title} has been added to the wishlist!`);
    }
  };

  if (!product) {
    return  <p>loading...</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      
      {/* Size Selector */}
      {product.availableSizes && (
        <div className="size-selector">
          <select value={selectedSize} onChange={handleSizeChange}>
            {product.availableSizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Buttons */}
      <div className="buttons">
      <NavLink to='/wishlist'>
        <button onClick={handleAddToWishlist} className="add-wishlist-btn">
          Add to Wishlist
          </button>
        </NavLink>
       <NavLink to='/cart'>
        <button onClick={handleAddToCart} className="add-cart-btn">  
          Go to Bag
        </button></NavLink>
        
        
      </div>
    </div>
  );
};

export default ProductsId;
