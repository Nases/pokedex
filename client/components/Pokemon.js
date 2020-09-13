import Grid from '@material-ui/core/Grid'
import axios from 'axios'


const Pokemon = ({ url, name }) => {
  axios.get(url).then(value => {
    console.log(value.data)
  })

  return (
    <Grid item xs={3}>
      {name}
    </Grid>

  )
}

export default Pokemon