import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.download_options}>
          <p>Baixe a nossa aplicação</p>
          <p>Vaixe nossa aplicação para Android e iOS</p>

          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className={styles.logo_footer}>
          <h1 className={styles.logo}>
            BYTE<span>LAB</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            eum? Minus necessitatibus et ut temporibus, incidunt ipsa aut
            architecto perspiciatis consequuntur ducimus, impedit natus
            similique cumque dolorem, molestias cum laudantium?
          </p>
        </div>

        <div className={styles.links}>
          <h3>Links úteis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
                <Link to="/">Blog posts</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
            <li>
                <Link to="/">Afiliados</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.page_inner_content}>
        <hr />

        <p className={styles.copyright}>
          Copyright 2026 - ByteLab - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
