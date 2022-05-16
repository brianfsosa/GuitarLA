import Link from 'next/link'

import styles from '../styles/NoEncontrado.module.css'

function NoEncontrada() {
  return (
    
        <div className={styles.no_encontrado}>
            <h1 className="heading"> Página no encontrada</h1>
            <Link href="/">Volver al inicio</Link>
        </div>
    
  )
}

export default NoEncontrada   