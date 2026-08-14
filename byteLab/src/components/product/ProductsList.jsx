import React from "react";
import Product from "./Product";

const ProductsList = ({ products, addProductToCart }) => {
  return (
    <div className="product_list">
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addProductToCart={addProductToCart}
        />
      ))}
    </div>
  );
};

export default ProductsList;
