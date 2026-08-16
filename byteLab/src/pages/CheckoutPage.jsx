import { Link } from "react-router-dom";
import { Banknote } from "lucide-react";
import { useCartContext } from "../context/CartContext";
import styles from "./CheckoutPage.module.css";

// Página "/cart/checkout"
const CheckoutPage = () => {
  const { selectedProducts, cartTotal } = useCartContext();

  // Carrinho vazio: mostra mensagem em vez do resumo
  if (selectedProducts.length === 0) {
    return (
      <div className="page_inner_content">
        <div className="section_title">
          <h3>Finalizar Compra</h3>
          <div className="underline"></div>
        </div>

        <div className={styles.empty_state}>
          <p>Seu carrinho está vazio.</p>
          <Link to="/products" className="btn_icon">
            <span>Ver produtos</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page_inner_content">
      <div className="section_title">
        <h3>Finalizar Compra</h3>
        <div className="underline"></div>
      </div>

      <div className={styles.checkout_layout}>
        {/* lista de itens */}
        <div className={styles.items_list}>
          {selectedProducts.map((product) => (
            <div key={product.id} className={styles.checkout_item}>
              <img src={product.image} alt={product.name} />

              <div className={styles.item_details}>
                <p className={styles.item_name}>{product.name}</p>
                <p className={styles.item_price}>
                  R$ {product.price} <span>× {product.quantity}</span>
                </p>
              </div>

              <p className={styles.item_subtotal}>
                R$ {product.price * product.quantity}
              </p>
            </div>
          ))}
        </div>

        {/* resumo do pedido */}
        <div className={styles.summary}>
          <h4>Resumo do pedido</h4>

          <div className={styles.summary_row}>
            <span>Subtotal</span>
            <span>R$ {cartTotal}</span>
          </div>

          <div className={styles.summary_row}>
            <span>Frete</span>
            <span>Grátis</span>
          </div>

          <div className={`${styles.summary_row} ${styles.total_row}`}>
            <span>Total</span>
            <span>R$ {cartTotal}</span>
          </div>

          {/* confirmação do pedido */}
          <button className="btn_icon">
            <span>Confirmar Pedido</span>
            <Banknote />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;