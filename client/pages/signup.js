import SignUpForm from '../components/forms/SignUpForm'
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
  var title = 'Sign Up | Pokédex'
  var description = 'Sign up to Pokédex!'

  const classes = useStyles()

  return (
    <Layout title={title} description={description}>
      <div className={classes.container}>
        <LayoutIndent>
          <SignUpForm />
        </LayoutIndent>
      </div>
    </Layout>
  )
}

export default SignUp