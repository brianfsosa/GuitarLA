import Layout from '../components/Layout'

function Tienda() {
  return (
     <Layout pagina={'Tienda Virtual'}>
        <main className='contenedor'>
            <h1 className='heading'>Nuestra tienda</h1>
        </main>
     </Layout>
  )
}

export async function getServerSideProps(){
   const url = `{process.env.API_URL}/guitarras`
   const respuesta = await fetch(url)
   const guitarras = await respuesta.json()
   return {
      props: {
         
      }
   }
}

export default Tienda