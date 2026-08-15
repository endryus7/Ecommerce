import React from "react";
import styles from "./Exclusive.module.css";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Seção de banner "produto em destaque".
const Exclusive = () => {
  return (
    <div className={styles.exclusive_section}>
      <div className={styles.page_inner_content}>

        <div className={styles.content}>

          <div className={styles.left_side}>
            <h2>Smart Band 4</h2>

            <p>
              O Mi Smart Band 4 tem uma tela AMOLED 39.9% maior que o Mi Band 3,
              tela completamente digital com brilho ajustável, da tal modo que
              tudo é claro ao máximo
            </p>

            <Link to="/products" className={styles.see_more_btn}>
              <span>Ver Agora</span>
              <ChevronRight />
            </Link>
          </div>

          <div className={styles.right_side}>
            <img
              src="/images/banners/exclusive.png"
              alt="Smart Band 4"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Exclusive;