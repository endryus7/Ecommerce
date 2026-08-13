import React from "react";
import styles from "./SidebarCart.module.css";
import { X, Banknote } from "lucide-react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";

const SidebarCart = ({ setShowSidebarCart, showSidebarCart }) => {
  return (
    <aside
      className={`${styles.sidebar_cart} ${
        showSidebarCart ? styles.show : ""
      }`}
    >
      <div className={styles.top}>
        <h3>Seu carrinho</h3>

        <button onClick={() => setShowSidebarCart(false)}>
          <X />
        </button>
      </div>

      <div className={styles.sidebar_products_list}>
        <SidebarProduct />
        <SidebarProduct />
        <SidebarProduct />
      </div>

      <div className={styles.total_container}>
        <b>Total: </b> R$ 5000
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