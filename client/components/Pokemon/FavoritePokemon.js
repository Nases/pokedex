import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { NotificationManager } from 'react-notifications'


const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
    margin: 'auto'
  },
  favIcon: {
    marginLeft: 'auto'
  }
})

const FavoritePokemon = ({ id, name }) => {
  const classes = useStyles()
  const [isFav, setIsFav] = useState(false)


  const toggleIsFav = () => {
    setIsFav(prevState => !prevState)
    if (isFav) {
      NotificationManager.info(`${name} removed from favorites.`, null, 3000)
    } else {
      NotificationManager.success(`${name} added to favorites.`, null, 3000)
    }
  }


  return (
    <Tooltip title={isFav ? 'Remove from Favorites' : 'Add to Favorites'} placement="right">
      <IconButton className={classes.favIcon} onClick={toggleIsFav}>
        <Typography variant="h5" component="h2" align='right' className='text-red-600 ml-auto'>
          {isFav ? <i className="fas fa-heart" aria-hidden></i> : <i className="far fa-heart" aria-hidden></i>}
        </Typography>
      </IconButton>
    </Tooltip>)
}

export default FavoritePokemon