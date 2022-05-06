import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

function Nosotros() {
  return (
     <Layout pagina={'Nosotros'}>
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
                <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros'></Image>
                <div>
                    <p>Vivamus vel viverra eros. Morbi vitae ligula sit amet mauris iaculis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis non euismod neque, eget sagittis nisi. Suspendisse scelerisque ultricies sodales. In dapibus orci sit amet elit varius imperdiet. Nunc vel malesuada sapien. Curabitur sagittis ex eu varius accumsan. Suspendisse nibh dolor, tempus non vehicula at, tincidunt dignissim ipsum. Maecenas vel placerat ligula. Nulla pretium metus et quam volutpat, eget rhoncus nibh tincidunt. Cras mollis, metus sit amet viverra placerat, neque libero suscipit tortor, sit amet malesuada sem dui in mauris.</p>
                    <p>Vivamus vel viverra eros. Morbi vitae ligula sit amet mauris iaculis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis non euismod neque, eget sagittis nisi. Suspendisse scelerisque ultricies sodales. In dapibus orci sit amet elit varius imperdiet. Nunc vel malesuada sapien. Curabitur sagittis ex eu varius accumsan. Suspendisse nibh dolor, tempus non vehicula at, tincidunt dignissim ipsum. Maecenas vel placerat ligula. Nulla pretium metus et quam volutpat, eget rhoncus nibh tincidunt. Cras mollis, metus sit amet viverra placerat, neque libero suscipit tortor, sit amet malesuada sem dui in mauris.</p>
                </div>
            </div>
        </main>
     </Layout>
  )
}

export default Nosotros