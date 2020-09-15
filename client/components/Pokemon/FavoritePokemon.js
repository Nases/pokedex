import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { NotificationManager } from 'react-notifications'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import userUtils from '../../assets/userUtils'


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
  const user = useUser()
  const userDispatch = useDispatchUser()

  const [isFav, setIsFav] = useState()

  useEffect(() => {
    setIsFav(user.data.favoritePokemons.includes(id))
  })

  // console.log(user)


  const toggleIsFav = () => {
    setIsFav(prevState => !prevState)
    if (isFav) {
      const index = user.data.favoritePokemons.indexOf(id)
      if (index > -1) {
        user.data.favoritePokemons.splice(index, 1)
        var newFavoritePokemons = user.data.favoritePokemons
      }

      userUtils.favoritePokemon(newFavoritePokemons)
        .then(response => {
          userDispatch({
            type: 'UPDATE_FAVORITE_POKEMONS',
            favoritePokemons: newFavoritePokemons
          })
          console.log(response)
          // setSubmitting(false)
        })
        .catch((error) => {
          // console.log(error)
          // setSubmitting(false)
        })



      NotificationManager.info(`${name} removed from favorites.`, null, 3000)
    } else {
      NotificationManager.success(`${name} added to favorites.`, null, 3000)
      user.data.favoritePokemons.push(id)
      var newFavoritePokemons = user.data.favoritePokemons

      userUtils.favoritePokemon(newFavoritePokemons)
        .then(response => {
          userDispatch({
            type: 'UPDATE_FAVORITE_POKEMONS',
            favoritePokemons: newFavoritePokemons
          })
          console.log(response)
          // setSubmitting(false)
        })
        .catch((error) => {
          // console.log(error)
          // setSubmitting(false)
        })



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