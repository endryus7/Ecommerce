import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <Router>
        <div className={styles.nav}>
          <div className={styles.inner_content}>
            <h1 className={styles.logo}>
              Byte<span>Lab</span>
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/produtos">Produtos</Link>
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
                />
              </div>
              <button className={styles.shopping_cart}>
                <ShoppingCart size={30} />
                <div className={styles.products_count}>0</div>
              </button>
              <button className={styles.menu_button}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Navbar;
