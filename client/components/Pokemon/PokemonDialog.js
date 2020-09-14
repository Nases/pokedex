import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'

const useStyles = makeStyles({

})

export default function SimpleDialog({ onClose, open, metaData, characteristics }) {
  const classes = useStyles()

  var name = metaData.name.charAt(0).toUpperCase() + metaData.name.slice(1)

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{name}</DialogTitle>
    </Dialog>
  )
}
