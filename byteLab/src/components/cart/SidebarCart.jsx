import styles from "./SidebarCart.module.css";
import { X, Banknote } from "lucide-react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

// A sidebar (painel lateral) do carrinho.
const SidebarCart = () => {
  const { showSidebarCart, setShowSidebarCart, selectedProducts, cartTotal } =
    useCartContext();

  return (
    <aside
      // "show" é adicionada só quando showSidebarCart é true
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
          // remove o produto e atualiza o total.
          <SidebarProduct key={product.id} {...product} />
        ))}
      </div>

      {cartTotal === 0 ? (
        <i>Seu carrinho está vazio</i>
      ) : (
        <>
          <div className={styles.total_container}>
            <b>Total: </b> R$ {cartTotal}
          </div>

          <Link to="/cart/checkout" className={styles.btn_icon}>
            <span>Pagar Agora</span>
            <Banknote />
          </Link>
        </>
      )}
    </aside>
  );
};

export default SidebarCart;