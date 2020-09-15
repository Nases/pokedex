import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PokemonWeight from './PokemonWeight'
import PokemonHeight from './PokemonHeight'
import FavoritePokemon from './FavoritePokemon'

import PokemonDialog from './PokemonDialog'

const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
    margin: 'auto'
  }
})


const Pokemon = ({ url, name, howManyInOneRow }) => {
  const classes = useStyles()

  const [metaData, setMetaData] = useState()
  const [characteristics, setCharacteristics] = useState()
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  // capitalize name
  name = name.charAt(0).toUpperCase() + name.slice(1)

  const openDialog = () => {
    setDialogIsOpen(true)
  }
  const closeDialog = () => {
    setDialogIsOpen(false)
  }


  useEffect(() => {
    axios.get(url).then(value => {
      var data = value.data
      setMetaData(data)
      axios.get(`https://pokeapi.co/api/v2/characteristic/${data.id}/`).then(value => {
        setCharacteristics(value.data)
      })
    })
  }, [])

  if (metaData) {
    var img = metaData.sprites.other.dream_world.front_default
    var id = metaData.id
    var weight = metaData.weight / 10
    var height = metaData.height / 10
  }

  if (characteristics) {
    var description = characteristics.descriptions[2].description
  }

  return (
    <>
      {
        metaData ?
          <Grid item md={howManyInOneRow}>
            <Card className={classes.root}>
              <PokemonDialog open={dialogIsOpen} onClose={closeDialog} metaData={metaData} characteristics={characteristics} />
              <CardActionArea onClick={openDialog}>
                <img src={img} alt={name} height='250' className='m-auto block pt-8' />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" align='center' className='capitalize'>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" align='center'>
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <Typography className='pl-3 text-gray-700'>
                  #{id}
                </Typography>
                <PokemonWeight pokemonWeight={weight} />
                <PokemonHeight pokemonHeight={height} />
                <FavoritePokemon name={name} id={id} />
              </CardActions>
            </Card>
          </Grid>
          :
          ''
      }
    </>
  )
}

export default Pokemon