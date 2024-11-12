import React from 'react';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;  

    const handleAddToCart = () => {
        console.log(`Product ${id} added to cart`); 
    };

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
            <p>
                <b>{productName}</b>
                </p>
                <p>₹{price}</p>


            
            <button className={handleAddToCart}>Add to Cart</button>
        </div></div>
    );
}
