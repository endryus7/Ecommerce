import React from "react";
import { Link } from "react-router-dom";
import { Banknote, ShoppingCart } from "lucide-react";

const Product = ({ id, image, name, rate, price, addProductToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">
        <span>R$</span> {price}
      </p>

      <div className="buttons">
        <Link to="/products/123/checkout" className="btn_icon">
          <span>Comprar agora</span>
          <Banknote />
        </Link>
        <button
          onClick={() => addProductToCart(id)}
          className="btn_icon add_to_cart_btn"
        >
          <span>Adicionar ao carrinho</span>
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
