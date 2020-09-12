import Head from 'next/head'
import Copyright from './Copyright'



// import Header from '../partials/Header/Header'
// import Footer from '../partials/Footer/Footer'
// import EnsureNotLoading from '../utils/EnsureNotLoading'

export default function Layout({ children, title, description }) {

  return (
    <>
      {/* <EnsureNotLoading> */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {/* <Header /> */}
      {/* <div className='min-h-screen'> */}
      <div>
        {children}
        <Copyright />
      </div>
      {/* </div> */}
      {/* <Footer /> */}
      {/* </EnsureNotLoading> */}
    </>
  )
}