import { Formik, Form, Field, ErrorMessage } from 'formik'
import FormErrorMessage from './partials/FormErrorMessage'
import { SignUpSchema } from '../../assets/validation/schemas'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import Router from 'next/router'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'teal',
    width: 50,
    height: 50
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginLink: {
    color: '#3f51b5',
    textDecoration: 'none'
  }
}))

const SignUpForm = () => {
  const classes = useStyles()
  const dispatchUserData = useDispatchUser()
  const user = useUser()

  console.log(user)

  return (
    <Container component="main" maxWidth="xs" className='mb-10'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <i aria-hidden className="fas fa-user-plus"></i>
        </Avatar>
        <Typography component="h1" variant="h5" className='text-blue-700'>
          Sign up
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            serverError: ''
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={SignUpSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            userUtils.signUp(values.email, values.password, values.confirmPassword)
              .then(response => {
                dispatchUserData({
                  type: 'LOGIN',
                  userData: response.data
                })
                Router.push('/pokemons')
                // console.log(response)
                // setSubmitting(false)
              })
              .catch((error) => {
                // console.log(error)
                dispatchUserData({
                  type: 'SET_IS_LOADING_FALSE'
                })
                setFieldError('serverError', error.response.data)
                setSubmitting(false)
              })
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className={classes.form}>
              <ErrorMessage name="serverError" component={FormErrorMessage} />
              <div className='mb-4'>
                <Field id='email' type="email" name="email" placeholder='you@example.com' variant="outlined" fullWidth label="Email address" autoComplete="email" autoFocus as={TextField} />
                <ErrorMessage name="email" component={FormErrorMessage} />
              </div>
              <div className='mb-4'>
                <Field id='password' type="password" name="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' variant="outlined" fullWidth label="Password" as={TextField} />
                <ErrorMessage name="password" component={FormErrorMessage} />
              </div>
              <div className='mb-4'>
                <Field id='confirmPassword' type="password" name="confirmPassword" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' variant="outlined" fullWidth label="Confirm password" as={TextField} />
                <ErrorMessage name="confirmPassword" component={FormErrorMessage} />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
            </Button>
            </Form>
          )}
        </Formik>
        <div className='mt-3 w-full text-right'>
          <Link href="/login">
            <a className={classes.loginLink}>Already have an account? Log in</a>
          </Link>
        </div>
      </div>
    </Container>
  )
}


export default SignUpForm