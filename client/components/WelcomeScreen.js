import LayoutIndent from '../components/Layout/LayoutIndent'
import Typography from '@material-ui/core/Typography'
import Link from '../components/Link'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'


const useStyles = makeStyles({
  container: {
    height: '90vh',
    backgroundImage: `url(${"/img/wallpaper.jpg"})`
  },
  content: {
    paddingTop: '100px',
    textAlign: 'center'
  }
})


const WelcomeScreen = () => {
  const classes = useStyles()
  const user = useUser()

  if (user) {
    var email = user.data.email
  }



  return (
    <div className={classes.container}>
      <LayoutIndent>
        <div className={classes.content}>
          {
            user.isAuth ?
              <>
                <Typography variant="h4" component="h1" gutterBottom className='text-white'>
                  Welcome back {email}!
                </Typography>
                <Typography variant="h5" component="h1" gutterBottom className='text-white'>
                  Would you like to check out the Pokémon List?
                </Typography>
                <div className='mt-8'>
                  <Button variant="contained" color="primary" component={Link} naked href="/pokemons">
                    Pokémon List
                  </Button>
                </div>
              </>
              :
              <>
                <Typography variant="h4" component="h1" gutterBottom className='text-white'>
                  Welcome to Pokédex!
                </Typography>
                <Typography variant="h5" component="h1" gutterBottom className='text-white'>
                  Let's get started!
                </Typography>
                <div className='mt-8'>
                  <span className='mr-4'>
                    <Button variant="contained" color="primary" component={Link} naked href="/login">
                      Log In
                    </Button>
                  </span>
                  <Button variant="contained" color="secondary" component={Link} naked href="/signup">
                    Sign Up
                  </Button>
                </div>
              </>
          }
        </div>
      </LayoutIndent>
    </div>
  )
}

export default WelcomeScreen