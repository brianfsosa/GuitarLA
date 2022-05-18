import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from '../../helpers'
import style from '../../styles/Entrada.module.css'

function EntradaBlog({entrada}) {
    const {contenido, imagen, published_at, titulo} = entrada[0]
    
    return (
        <Layout pagina={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={style.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen de entrada ${titulo}`} />
                    <div className={style.contenido}>
                     <p className={style.fecha}>{formatearFecha(published_at)}</p>
                     <p className={style.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    const paths = entrada.map(entrada => ({
        params:{url: entrada.url}
    }))
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params: { url }}) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada: entrada
        }
    }
}

/* export async function getServerSideProps({query: { id }}) {
    const url = `http://localhost:1337/blogs/${id}`
    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada
        }
    }
} */

export default EntradaBlog