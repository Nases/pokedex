import LogInForm from '../components/forms/LogInForm'
import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'

const SignUp = () => {
  var title = 'Log In | Pokédex'
  var description = 'Log In to Pokédex!'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <LogInForm />
      </LayoutIndent>
    </Layout>
  )
}

export default SignUp