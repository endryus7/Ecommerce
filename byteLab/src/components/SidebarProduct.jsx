import React from "react";
import styles from "./SidebarProduct.module.css";
import { X } from "lucide-react";

const SidebarProduct = () => {
  return (
    <div className={styles.sidebar_product}>
      <div className={styles.left_side}>
        <button className={styles.remove_product_btn}>
          <X size={16} />
        </button>

        <div className={styles.details}>
          <h4>Cadeira Gamer</h4>
          <p>R$ 1000</p>
          <input type="number" min={1} max={100} />
          <p className={styles.price_sum}>
            <b>Soma:</b> R$ 1000
          </p>
        </div>
      </div>

      <div className={styles.right_side}>
        <img src="/images/gaming-msi-header.png" alt="Cadeira Gamer" />
      </div>
    </div>
  );
};

export default SidebarProduct;
