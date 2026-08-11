import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Header = () => {
  return (
    <>
    <header>
      <div className={styles.inner_content}>

        <div className={styles.left_side}>
            <h2>Deixei o Seu Trabalho Com Um Novo Estilo!</h2>
            <p>Sucesso nem sempre tem haver com grandeza. Tem haver com consistência. Trabalho duro consistente supera o sucesso. A grandeza virá</p>
            <Link to="/products" className={styles.see_more_btn}>
              <span>Ver Agora</span>
              <ChevronRight />
            </Link>
        </div>

        <div className={styles.right_side}>
          <img src="/images/header-image.png" alt="Produto" />
        </div>

      </div>
    </header>
    </>
  )
}

export default Header