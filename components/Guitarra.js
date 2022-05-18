import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/Guitarra.module.css'

function Guitarra({guitarra}) {
    const {descripcion, imagen, nombre, precio, url} = guitarra
    return (
        <div className={styles.guitarra}>
            <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen Guitarra ${nombre}`}/>
            <div>
                <h3 className={styles.contenido}>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    Ver Producto
                </Link>
            </div>
        </div>
  )
}

export default Guitarra