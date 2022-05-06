import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div>
        <Head>
            <title>GuitarLA</title>
            <meta name="description" content="sitio web de ventas de guitarra" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout