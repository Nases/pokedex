import LayoutIndent from '../components/Layout/LayoutIndent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '../components/Link'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  paperContainer: {
    height: '100vh',
    backgroundImage: `url(${"/img/wallpaper.jpg"})`
  }
})


const WelcomeScreen = () => {
  const classes = useStyles()

  return (
    <div className={classes.paperContainer}>
      <LayoutIndent>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Pokédex!
          </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          Log In to get started!
            </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/pokemons">
          Pokémon List
        </Button>
      </LayoutIndent>
    </div>
  )
}

export default WelcomeScreen