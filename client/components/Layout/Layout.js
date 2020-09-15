import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { makeStyles } from '@material-ui/core/styles'
import EnsureNotLoading from '../utils/EnsureNotLoading'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh'
  }
}))

export default function Layout({ children, title, description }) {
  const classes = useStyles()

  return (
    <>
      <EnsureNotLoading>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
        <div className={classes.root}>
          <Header />
          <div className='min-h-screen'>
            {children}
          </div>
          <Footer />
        </div>
      </EnsureNotLoading>
    </>
  )
}