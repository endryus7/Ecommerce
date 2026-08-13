import React from "react";
import styles from "./SidebarCart.module.css";
import { X, Banknote } from "lucide-react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";
import Product from "./Product";

const SidebarCart = ({
  setShowSidebarCart,
  showSidebarCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
}) => {
  return (
    <aside
      className={`${styles.sidebar_cart} ${showSidebarCart ? styles.show : ""}`}
    >
      <div className={styles.top}>
        <h3>Seu carrinho</h3>

        <button onClick={() => setShowSidebarCart(false)}>
          <X />
        </button>
      </div>

      <div className={styles.sidebar_products_list}>
        {selectedProducts.map((product) => (
          <SidebarProduct
            key={product.id}
            {...product}
            removeProductFromCart={removeProductFromCart}
          />
        ))}
      </div>

      <div className={styles.total_container}>
        <b>Total: </b> R$ {cartTotal}
      </div>

      <Link to="/cart/checkout" className={styles.btn_icon}>
        <span>Pagar Agora</span>
        <Banknote />
      </Link>

      <i>Seu carrinho está vazio</i>
    </aside>
  );
};

export default SidebarCart;
