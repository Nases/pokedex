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
import { NotificationManager } from 'react-notifications';

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
      NotificationManager.info(`${name} removed from favorites.`, 'Success', 3000)
    } else {
      NotificationManager.success(`${name} added to favorites.`, 'Success', 3000)
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
  }


  const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };


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
          <Typography gutterBottom variant="p" align='right' >
            #{id}
          </Typography>
          <IconButton className={classes.favIcon} onClick={toggleIsFav}>
            <Typography variant="h5" component="h2" align='right' className='text-red-600 ml-auto'>
              {isFav ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Pokemon