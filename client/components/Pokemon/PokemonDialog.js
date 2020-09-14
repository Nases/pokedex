import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({

})

export default function SimpleDialog({ onClose, open, metaData, characteristics }) {
  const classes = useStyles()

  if (metaData) {
    var img = metaData.sprites.other.dream_world.front_default
    var name = metaData.name.charAt(0).toUpperCase() + metaData.name.slice(1)
    var type1 = metaData.types[0].type.name
    if (metaData.types[1]) {
      var type2 = metaData.types[1].type.name
    }
  }

  console.log(type2)

  if (characteristics) {
    var description = characteristics.descriptions[2].description
  }

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        {/* {name} */}
        <img src={img} alt={name} height='250' />
        <Typography gutterBottom variant="h5" component="h2" align='center' className='capitalize'>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align='center'>
          {description}
        </Typography>
        <img src={`/img/pokemon_types/${type1}.png `} alt={type1} />
        {type2 ? <img src={`/img/pokemon_types/${type2}.png `} alt={type2} /> : ''}


        {/* 
        <Typography variant="body2" color="textSecondary" component="p" align='center'>
          {type1}
          {type2}
        </Typography> */}
      </DialogTitle>
    </Dialog>
  )
}
