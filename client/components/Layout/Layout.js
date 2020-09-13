import Head from 'next/head'
import Footer from '../Footer/Footer'
import { makeStyles } from '@material-ui/core/styles'


// import Header from '../partials/Header/Header'
// import EnsureNotLoading from '../utils/EnsureNotLoading'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh'
  }
}))

export default function Layout({ children, title, description }) {
  const classes = useStyles()

  return (
    <>
      {/* <EnsureNotLoading> */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {/* <Header /> */}
      <div className={classes.root}>
        {children}
        <Footer />
      </div>
      {/* </EnsureNotLoading> */}
    </>
  )
}