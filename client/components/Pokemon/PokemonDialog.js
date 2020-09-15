import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ProgressBar from './ProgressBar'
import PokemonWeight from './PokemonWeight'
import PokemonHeight from './PokemonHeight'
import FavoritePokemon from './FavoritePokemon'

const useStyles = makeStyles({
  title: {
    width: 500
  }
})

export default function PokemonDialog({ onClose, open, metaData, characteristics }) {
  const classes = useStyles()

  if (metaData) {
    var id = metaData.id
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
    <>
      {metaData ?
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} fullWidth>
          <div className='my-6 px-10'>
            <img src={img} alt={name} height='250' className='block m-auto mb-4' />
            <Typography variant="h5" component="h2" align='center' className='text-center'>
              #{id}
              {' '}
              {name}
              <FavoritePokemon name={name} id={id} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align='center'>
              {description}
            </Typography>
            <div className='mt-3'>
              <Grid container>
                <Grid item xs={6}>
                  <PokemonWeight pokemonWeight={metaData.weight / 10} />
                </Grid>
                <Grid item xs={6}>
                  <PokemonHeight pokemonHeight={metaData.height / 10} />
                </Grid>
              </Grid>
            </div>
          </div>
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
            <div className='pt-4'>
              <Typography variant="body2" color="textPrimary" component="h5" align='center' className='capitalize'>
                Abilities
              </Typography>
              <div>
                <ul>
                  {metaData.abilities.map(value => {
                    return (
                      <li className='capitalize' key={value.ability.name}>{value.ability.name}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className='pt-4'>
              <Typography variant="body2" color="textPrimary" component="h5" align='center' className='capitalize'>
                Moves
              </Typography>
              <div>
                <ul>
                  {metaData.moves.map(value => {
                    return (
                      <li className='capitalize' key={value.move.name}>{value.move.name}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        : ''}
    </>
  )
}
