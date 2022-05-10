
function EntradaBlog({entrada}) {

    console.log(entrada)
    return (
        <div>Entrada de Blog</div>
    )
}
export async function getServerSideProps({query: { id }}) {
    const url = `http://localhost:1337/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada
        }
    }
}

export default EntradaBlog