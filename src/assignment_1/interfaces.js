import React from "react";
import "./interface.css";

const products = [
  {
    id: 1,
    name: "iPhone 13 Pro - Transparent",
    price: "LKR 499",
    image: "https://iplanet.one/cdn/shop/files/iPhone_13_Pro_Max_Alpine_Green_PDP_Image_Position-1A__en-US.jpg?v=1691139724&width=823",
  },
  {
    id: 2,
    name: "Samsung S23+ - Transparent",
    price: "LKR 799",
    image: "https://iplanet.one/cdn/shop/files/iPhone_13_Pro_Max_Alpine_Green_PDP_Image_Position-1A__en-US.jpg?v=1691139724&width=823",
  },

];

export default function Shop() {
  return (
    <div className="shop-container">
      <header className="shop-header">
        <div className="logo">sHOp</div>
        <nav className="nav-links">
          <a href="#" className="active">Shop All</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
        </nav>
      </header>
      
      <h1 className="shop-title">Shop All Products</h1>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
