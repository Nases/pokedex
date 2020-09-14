import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { NotificationManager } from 'react-notifications'
import Tooltip from '@material-ui/core/Tooltip'

import PokemonDialog from './PokemonDialog'

const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
    // maxWidth: '80%',
    // maxHeight: '80%',
    // height: 'auto',
    margin: 'auto'
  },
  favIcon: {
    marginLeft: 'auto'
  }
})


const Pokemon = ({ url, name, howManyInOneRow }) => {
  const classes = useStyles()

  const [metaData, setMetaData] = useState()
  const [characteristics, setCharacteristics] = useState()
  const [isFav, setIsFav] = useState(false)
  const [weight, setWeight] = useState()
  const [weightCoverted, setWeightConverted] = useState(false)
  const [height, setHeight] = useState()
  const [heightCoverted, setHeightConverted] = useState(false)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  // capitalize name
  name = name.charAt(0).toUpperCase() + name.slice(1)

  const openDialog = () => {
    setDialogIsOpen(true)
  }
  const closeDialog = () => {
    setDialogIsOpen(false)
  }

  const toggleIsFav = () => {
    setIsFav(prevState => !prevState)
    if (isFav) {
      NotificationManager.info(`${name} removed from favorites.`, null, 3000)
    } else {
      NotificationManager.success(`${name} added to favorites.`, null, 3000)
    }
  }

  useEffect(() => {
    axios.get(url).then(value => {
      var data = value.data
      setMetaData(data)
      setWeight(data.weight / 10)
      setHeight(data.height / 10)
      axios.get(`https://pokeapi.co/api/v2/characteristic/${data.id}/`).then(value => {
        setCharacteristics(value.data)
      })
    })
  }, [])

  if (metaData) {
    var img = metaData.sprites.other.dream_world.front_default
    var id = metaData.id
  }

  if (characteristics) {
    var description = characteristics.descriptions[2].description
  }

  const setTwoNumberDecimal = input => {
    return input = parseFloat(input).toFixed(1)
  }

  const convertWeight = () => {
    if (!weightCoverted) {
      setWeight(prevState => setTwoNumberDecimal(prevState * 2.205))
    } else {
      setWeight(prevState => setTwoNumberDecimal(prevState / 2.205))
    }
    setWeightConverted(prevState => !prevState)
  }

  const convertHeight = () => {
    if (!heightCoverted) {
      setHeight(prevState => setTwoNumberDecimal(prevState * 3.281))
    } else {
      setHeight(prevState => setTwoNumberDecimal(prevState / 3.281))
    }
    setHeightConverted(prevState => !prevState)
  }


  return (
    <Grid item xs={howManyInOneRow}>

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
          <Tooltip title={weightCoverted ? 'Convert to kg' : 'Convert to lb'} placement="right" className='cursor-pointer'>
            <Typography onClick={convertWeight} className='pl-4 text-gray-700'>
              <i aria-hidden className="fas fa-weight-hanging"></i>
              {' '}
              {`${weight} ${weightCoverted ? 'lb' : 'kg'}`}
            </Typography>
          </Tooltip>
          <Tooltip title={heightCoverted ? 'Convert to m' : 'Convert to ft'} placement="right" className='cursor-pointer'>
            <Typography onClick={convertHeight} className='pl-4 text-gray-700'>
              <i aria-hidden className="fas fa-ruler-vertical"></i>
              {' '}
              {`${height} ${heightCoverted ? 'ft' : 'm'}`}
            </Typography>
          </Tooltip>
          <Tooltip title={isFav ? 'Remove from Favorites' : 'Add to Favorites'} placement="right">
            <IconButton className={classes.favIcon} onClick={toggleIsFav}>
              <Typography variant="h5" component="h2" align='right' className='text-red-600 ml-auto'>
                {isFav ? <i className="fas fa-heart" aria-hidden></i> : <i className="far fa-heart" aria-hidden></i>}
              </Typography>
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Pokemon