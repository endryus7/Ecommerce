import React from "react";
import ProductsList from "../components/product/ProductsList";

const ProductsPage = ({ products, addProductToCart }) => {
  return (
    <div className="page_inner_content">
      <div className="section_title">
        <h3>Nossos Produtos</h3>
        <div className="underline"></div>
      </div>

      <div className="main_content">
        <ProductsList products={products} addProductToCart={addProductToCart} />
      </div>
    </div>
  );
};

export default ProductsPage;
