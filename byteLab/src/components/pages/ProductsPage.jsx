import React from "react";
import ProductsList from "../ProductsList";

const ProductsPage = ({ products }) => {
  return (
    <div className="page_inner_content">
      <div className="section_title">
        <h3>Nossos Produtos</h3>
        <div className="underline"></div>
      </div>

      <div className="main_content">
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
