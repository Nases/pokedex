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

const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
    // maxWidth: '80%',
    // maxHeight: '80%',
    // height: 'auto',
    margin: 'auto',
  },
});


const Pokemon = ({ url, name }) => {
  const classes = useStyles()

  const [metaData, setMetaData] = useState()


  useEffect(() => {
    axios.get(url).then(value => {
      setMetaData(value.data)
    })
  }, [])

  console.log(metaData)
  if (metaData) {
    var img = metaData.sprites.other.dream_world.front_default
    var id = metaData.id
  }


  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardActionArea>
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
        <CardActions>
          #{id}
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography gutterBottom variant="h5" component="h2" align='right' className='text-red-600' alignRight>
            <i class="far fa-heart"></i>
            <i class="fas fa-heart"></i>
          </Typography>

        </CardActions>
      </Card>


    </Grid>

  )
}

export default Pokemon