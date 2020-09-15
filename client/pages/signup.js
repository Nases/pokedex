import SignUpForm from '../components/forms/SignUpForm'
import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'

const SignUp = () => {
  var title = 'Sign Up | Pokédex'
  var description = 'Sign up to Pokédex!'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <SignUpForm />
      </LayoutIndent>
    </Layout>
  )
}

export default SignUp