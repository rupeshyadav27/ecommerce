import React from 'react';

export const Product = (props) => {
  const { id, title, price, image } = props.data;

  const handleAddToCart = () => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>₹{price}</p>
        <button className="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
