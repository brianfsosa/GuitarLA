import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function Layout({children, pagina, guitarra}) {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="sitio web de ventas de guitarra" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Header guitarra={guitarra}/>
        {children}
        <Footer />
    </div>
  )
}
Layout.defaultProps = {
  guitarra: null
}

export default Layout