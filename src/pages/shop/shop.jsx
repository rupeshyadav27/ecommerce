import React from 'react';
import { PRODUCTS } from "../../product"; 
import { Product } from "./product";  
import{} from "./shop.css";




const Shop = () => {
    
  return (
    <div className="Shop">
        <div className="shopTitle">
            <h1>CHROMA</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => 
            <Product key={product.id} data={product} /> 
          )}
        </div>
    </div>
  );
}

export default Shop;
