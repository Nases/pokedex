import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { NotificationManager } from 'react-notifications'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
    // maxWidth: '80%',
    // maxHeight: '80%',
    // height: 'auto',
    margin: 'auto',
  },
  favIcon: {
    marginLeft: 'auto'
  }
});


const Pokemon = ({ url, name }) => {
  const classes = useStyles()

  const [metaData, setMetaData] = useState()
  const [isFav, setIsFav] = useState(false)

  const toggleIsFav = () => {
    setIsFav(prevState => !prevState)
    name = name.charAt(0).toUpperCase() + name.slice(1)
    if (isFav) {
      NotificationManager.info(`${name} removed from favorites.`, null, 3000)
    } else {
      NotificationManager.success(`${name} added to favorites.`, null, 3000)
    }
  }

  useEffect(() => {
    axios.get(url).then(value => {
      setMetaData(value.data)
    })
  }, [])

  if (metaData) {
    var img = metaData.sprites.other.dream_world.front_default
    var id = metaData.id
    var weight = metaData.weight / 10
    var height = metaData.height / 10
  }

  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardActionArea onClick={() => console.log('helluu')}>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align='center' className='capitalize'>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <Typography variant="p" className='pl-3 text-gray-700'>
            #{id}
          </Typography>
          <Typography variant="p" className='pl-4 text-gray-700'>
            <i class="fas fa-weight-hanging"></i>
            {' '}
            {weight} kg
          </Typography>
          <Typography variant="p" className='pl-4 text-gray-700'>
            <i class="fas fa-ruler-vertical"></i>
            {' '}
            {height} m
          </Typography>
          <Tooltip title={isFav ? 'Remove from Favorites' : 'Add to Favorites'}>
            <IconButton className={classes.favIcon} onClick={toggleIsFav}>
              <Typography variant="h5" component="h2" align='right' className='text-red-600 ml-auto'>
                {isFav ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
              </Typography>
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Pokemon