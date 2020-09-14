import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import ProgressBar from './ProgressBar'

const useStyles = makeStyles({
  title: {
    width: 500
  }
})

// blend two hex colors together with an amount
const blendColors = (colorA, colorB, amount) => {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16))
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16))
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0')
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0')
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0')
  return '#' + r + g + b
}

console.log(blendColors('#FF0000', '#00FF66', 0.5));

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
          {metaData ?
            <div>
              <div className='mt-1'>
                HP ({metaData.stats[0].base_stat} / 150)
                <ProgressBar value={metaData.stats[0].base_stat / 1.5} />
              </div>
              <div className='mt-1'>
                Attack ({metaData.stats[1].base_stat} / 150)
                <ProgressBar value={metaData.stats[1].base_stat / 1.5} />
              </div>
              <div className='mt-1'>
                Defense ({metaData.stats[2].base_stat} / 150)
                <ProgressBar value={metaData.stats[2].base_stat / 1.5} />
              </div>
              <div className='mt-1'>
                Speed ({metaData.stats[5].base_stat} / 150)
                <ProgressBar value={metaData.stats[5].base_stat / 1.5} />
              </div>
              <div className='mt-1'>
                Special Attack ({metaData.stats[3].base_stat} / 150)
                <ProgressBar value={metaData.stats[3].base_stat / 1.5} />
              </div>
              <div className='mt-1'>
                Special Defense ({metaData.stats[4].base_stat} / 150)
                <ProgressBar value={metaData.stats[4].base_stat / 1.5} />
              </div>
            </div>
            : ''}
        </div>
      </DialogContent>
    </Dialog>
  )
}
