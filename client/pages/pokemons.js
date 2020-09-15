import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import Grid from '@material-ui/core/Grid'
import Pokemon from '../components/Pokemon/Pokemon'
import { NotificationContainer } from 'react-notifications'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import EnsureAuth from '../components/utils/EnsureAuth'
import axios from 'axios'

export default function Pokemons() {
  var title = 'Pokémon List | Pokédex'
  var description = 'List of the Pokémons available'

  const [data, setData] = useState([])
  const [howManyInOneRow, setHowManyInOneRow] = useState(4)
  const [favFilterOn, setfavFilterOn] = useState(false)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(value => {
      setData(value.data.results)
    })
  }, [])

  const toggleHowManyInOneRow = () => {
    setHowManyInOneRow(prevState => {
      if (prevState === 4) {
        return 3
      } else {
        return 4
      }
    })
  }


  return (
    <EnsureAuth>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <Box my={4}>
            <Typography variant="h4" component="h1" align='center'>
              Pokémon List
            </Typography>
            <div className='mt-4'>
              <Tooltip title={howManyInOneRow == 4 ? 'Show 4 Pokémons in one row' : 'Show 3 Pokémons in one row'} placement="right">
                <IconButton onClick={toggleHowManyInOneRow}>
                  <span className='cursor-pointer underline-on-hover font-bold'>
                    {howManyInOneRow == 4 ? '|||' : '||||'}
                  </span>
                </IconButton>
              </Tooltip>
              <Tooltip title={favFilterOn ? 'Show all Pokémons' : 'Show only Favorite Pokémons'} placement="right">
                <IconButton onClick={() => setfavFilterOn(prevState => !prevState)}>
                  <span className='cursor-pointer underline-on-hover font-bold'>
                    {favFilterOn ? <i className="fas fa-heart" aria-hidden></i> : <i className="far fa-heart" aria-hidden></i>}
                  </span>
                </IconButton>
              </Tooltip>
            </div>
            <hr />
            <Box my={4}>
              <Grid container spacing={3}>
                {data.map(value => {
                  return (
                    <Pokemon name={value.name} url={value.url} howManyInOneRow={howManyInOneRow} key={value.name} favFilterOn={favFilterOn} />
                  )
                })}
              </Grid>
            </Box>
          </Box>
          <NotificationContainer />
        </LayoutIndent>
      </Layout>
    </EnsureAuth>
  )
}
