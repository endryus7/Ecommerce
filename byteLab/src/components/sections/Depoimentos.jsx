import React from 'react'
import styles from './Depoimentos.module.css'

// Seção de depoimentos.
const Depoimentos = () => {
  return (
    <div className={styles.page_inner_content}>
        <div className={styles.depoimentos}>
            
            <div className={styles.depoimento}>
                <p>"</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam tempore? Unde consequuntur minus maxime numquam delectus, similique nulla hic est modi quisquam, molestiae voluptas. Inventore, repellat? Praesentium, iusto sapiente.</p>
                <p className={styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <p>Endryus</p>
            </div>

             <div className={styles.depoimento}>
                <p>"</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam tempore? Unde consequuntur minus maxime numquam delectus, similique nulla hic est modi quisquam, molestiae voluptas. Inventore, repellat? Praesentium, iusto sapiente.</p>
                <p className={styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <p>Endryus</p>
            </div>

             <div className={styles.depoimento}>
                <p>"</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam tempore? Unde consequuntur minus maxime numquam delectus, similique nulla hic est modi quisquam, molestiae voluptas. Inventore, repellat? Praesentium, iusto sapiente.</p>
                <p className={styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <p>Endryus</p>
            </div>
            
        </div>
    </div>
  )
}

export default Depoimentos