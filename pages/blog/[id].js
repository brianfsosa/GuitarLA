
function EntradaBlog({entrada}) {

    console.log(entrada)
    return (
        <div>Entrada de Blog</div>
    )
}

export async function getStaticPaths(){
    const url = 'http://localhost:1337/blogs'
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    const paths = entrada.map(entrada => ({
        params:{id: entrada.id}
    }))
    console.log(paths)
    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps({params: { id }}) {
    const url = `http://localhost:1337/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada
        }
    }
}

/* export async function getServerSideProps({query: { id }}) {
    const url = `http://localhost:1337/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada
        }
    }
} */

export default EntradaBlog