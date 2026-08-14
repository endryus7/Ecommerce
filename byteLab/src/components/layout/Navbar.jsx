import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const Navbar = ({ onSearch }) => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { setShowSidebarCart, selectedProducts } = useCartContext();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.inner_content}>
        <h1 className={styles.logo}>
          BYTE<span>LAB</span>
        </h1>

        <nav className={`${show && styles.show}`}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <Link to="/products">Produtos</Link>
            </li>

            <li>
              <Link to="/sobre">Sobre</Link>
            </li>

            <li>
              <Link to="/contato">Contato</Link>
            </li>

            <li>
              <Link to="/conta">Conta</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.navs_icon_container}>
          <div className={styles.search_input_container}>
            <Search size={20} />

            <input
              type="search"
              placeholder="Pesquisar produtos"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>

          <button
            className={styles.shopping_cart}
            onClick={() => setShowSidebarCart(true)}
          >
            <ShoppingCart size={30} />
            <div className={styles.products_count}>
              {selectedProducts.length}
            </div>
          </button>

          <button className={styles.menu_button} onClick={() => setShow(!show)}>
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;