import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import Button from '../Button/Button'
import FormErrorMessage from './partials/FormErrorMessage'
import { SignUpSchema } from '../../assets/validation/schemas'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import Router from 'next/router'


const SignUpForm = () => {
  const dispatchUserData = useDispatchUser()


  return (
    <div>
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
          <Form>
            <ErrorMessage name="serverError" component={FormErrorMessage} />
            <div>
              <Label htmlFor="email">Email address</Label>
              <Field id='email' type="email" name="email" placeholder='you@example.com' as={Input} />
              <ErrorMessage name="email" component={FormErrorMessage} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Field id='password' type="password" name="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
              <ErrorMessage name="password" component={FormErrorMessage} />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Field id='confirmPassword' type="password" name="confirmPassword" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
              <ErrorMessage name="confirmPassword" component={FormErrorMessage} />
            </div>
            <Button type="submit" color='gamifyPrimary' disabled={isSubmitting} className='mt-6 w-full'>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}






export default SignUpForm