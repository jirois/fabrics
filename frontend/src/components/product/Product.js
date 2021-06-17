import React from "react";
import "./product.scss";

function Product(props) {
  const products = props.products;
  return (
    <div className="products">
      {products.map((product) => (
        <article key={product._id} className="product">
          <div className="img-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-footer">
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <p>Available Stock: {product.countInStock}</p>
            <a href="#" className="btn btn-primary btn-details">
              {" "}
              details
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Product;
