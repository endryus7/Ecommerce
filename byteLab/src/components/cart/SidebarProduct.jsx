import styles from "./SidebarProduct.module.css";
import { X } from "lucide-react";
import { useCartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

// Renderiza UMA linha do carrinho. id, image, name, price e quantity
const SidebarProduct = ({ id, image, name, price, quantity }) => {
  // Pega do CartContext em vez de receber por prop
  const { removeProductFromCart, updateQuantity } = useCartContext();


  // (preço unitário x quantidade = quanto esse item pesa no total).
  const priceSum = price * quantity;

  return (
    <div className={styles.sidebar_product}>
      <div className={styles.left_side}>
        {/* Botão de remover: chama removeProductFromCart com o id desse produto específico. */}
        <button
          className={styles.remove_product_btn}
          onClick={() => removeProductFromCart(id)}
        >
          <X size={16} />
        </button>

        <div className={styles.details}>
          <h4>{name}</h4>
          <p>R$ {formatPrice(price)}</p>

          {/* value vem do carrinho (quantity), e cada mudança chama updateQuantity, que recalcula tudo no useCart.js. O componente só repassa o valor digitado. */}
          <input
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => updateQuantity(id, e.target.value)}
          />

          {/* Só mostra a linha "Soma" quando tem mais de 1 unidade */}
          {quantity > 1 && (
            <p className={styles.price_sum}>
              <b>Soma:</b> R$ {formatPrice(priceSum)}
            </p>
          )}
        </div>
      </div>

      <div className={styles.right_side}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default SidebarProduct;