import { useState } from "react";
import styles from "./SidebarProduct.module.css";
import { X } from "lucide-react";
import { useCartContext } from "../../context/CartContext";

// Mostra o produto, deixa mudar quantidade e remover.
const SidebarProduct = ({ id, image, name, price }) => {
  const { removeProductFromCart, addToCardTotal } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price); // preço x quantidade

  return (
    <div className={styles.sidebar_product}>
      <div className={styles.left_side}>
        <button
          className={styles.remove_product_btn}
          onClick={() => {
            removeProductFromCart(id);
            // Subtrai do total geral o que esse item somava
            addToCardTotal(-priceSum);
          }}
        >
          <X size={16} />
        </button>

        <div className={styles.details}>
          <h4>{name}</h4>
          <p>R$ {price}</p>

          <input
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);

              // Recalcula o total geral: soma a diferença entre o novo subtotal e o antigo (não recalcula tudo do zero).
              addToCardTotal(e.target.value * price - priceSum);
              setPriceSum(e.target.value * price);
            }}
          />

          {/* Mostra a linha "Soma" se a quantidade for maior que 1 */}
          {priceSum > price && (
            <p className={styles.price_sum}>
              <b>Soma:</b> R$ {priceSum}
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