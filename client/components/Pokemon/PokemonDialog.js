import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles({
  title: {
    width: 500
  }
})

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress)

export default function PokemonDialog({ onClose, open, metaData, characteristics }) {
  const classes = useStyles()

  if (metaData) {
    var img = metaData.sprites.other.dream_world.front_default
    var name = metaData.name.charAt(0).toUpperCase() + metaData.name.slice(1)
    var type1 = metaData.types[0].type.name
    if (metaData.types[1]) {
      var type2 = metaData.types[1].type.name
    }
  }

  if (characteristics) {
    var description = characteristics.descriptions[2].description
  }

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        <img src={img} alt={name} height='250' className='block m-auto mb-4' />
        <Typography gutterBottom variant="h5" component="h2" align='center' className='capitalize' className={classes.title}>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align='center'>
          {description}
        </Typography>
      </DialogTitle>
      <DialogContent className='mb-6'>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src={`/img/pokemon_types/${type1}.png `} alt={type1} className='block m-auto my-1' />
            <div>
              <Typography variant="body2" color="textPrimary" component="p" align='center' className='capitalize'>
                {type1}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            {type2 ? <img src={`/img/pokemon_types/${type2}.png `} alt={type2} className='block m-auto my-1' /> : ''}
            <div>
              <Typography variant="body2" color="textPrimary" component="p" align='center' className='capitalize'>
                {type2}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className='my-4'>
          <Typography variant="body2" color="textPrimary" component="h5" align='center' className='capitalize'>
            Stats
        </Typography>
          <div>
            HP
        <BorderLinearProgress variant="determinate" value={50} />
          </div>
          <div>
            Attack
        <BorderLinearProgress variant="determinate" value={50} />
          </div>
          <div>
            Defense
        <BorderLinearProgress variant="determinate" value={50} />
          </div>
          <div>
            Speed
        <BorderLinearProgress variant="determinate" value={50} />
          </div>
          <div>
            Sp Atk
        <BorderLinearProgress variant="determinate" value={50} />
          </div>
          <div>
            Sp Def
        <BorderLinearProgress variant="determinate" value={50} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
