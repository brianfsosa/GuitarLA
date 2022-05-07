import { useEffect } from 'react'
import Layout from '../components/Layout'

function Blog() {

   useEffect(() => {
      const consultarAPI = async () => {
         const url = 'http://localhost:1337/blogs'
         const respuesta = await fetch(url)
         const resultado = await respuesta.json()
         console.log(resultado)
      }
      consultarAPI()
      
   },[])
  return (
     <Layout pagina='Blog'>
        <h1>The Blog</h1>
     </Layout>
  )
}

export default Blog
