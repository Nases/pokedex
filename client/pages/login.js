import LogInForm from '../components/forms/LogInForm'
import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    height: '90vh',
    backgroundImage: `url(${"/img/wallpaper.jpg"})`
  }
})

const SignUp = () => {
  var title = 'Log In | Pokédex'
  var description = 'Log In to Pokédex!'

  const classes = useStyles()


  return (
    <Layout title={title} description={description}>
      <div className={classes.container}>
        <LayoutIndent>
          <LogInForm />
        </LayoutIndent>
      </div>
    </Layout>
  )
}

export default SignUp