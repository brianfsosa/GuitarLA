import Link from "next/link"
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/Header.module.css'

function Header({guitarra}) {
  const router = useRouter()

  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.barra}>
              <Link href='/'>
                <a>
                  <Image width={400} height={100} src='/img/logo.svg' alt="imagen logo" />
                </a>
              </Link>
              <nav className={styles.navegacion}>
                  <Link href='/'>Inicio</Link>
                  <Link href='/nosotros'>Nosotros</Link>
                  <Link href='/blog'>Blog</Link>
                  <Link href='/tienda'>Tienda</Link>
              </nav>
            </div>

            {guitarra &&(
              <div className={styles.modelo}>
                <h2>Modelo {guitarra.nombre}</h2>
                <p>{guitarra.descripcion}</p>
                <p className={styles.precio}>${guitarra.precio}</p>
                <Link href={`/guitarras/${guitarra.url}`}>
                  <a className={styles.enlace}>
                    Ver Product
                  </a>
                </Link>
              </div>
            )}

        </div>
        
        {router.pathname === '/' && (
          <div className={styles.guitarra}>
            <Image width={500} height={1200} alt='imagen guitarra' src='/img/header_guitarra.png'/>
          </div>
        )}  
        
               
    </header>
  )
}

export default Header