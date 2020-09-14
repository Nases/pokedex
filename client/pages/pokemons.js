import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '../components/Link'
import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import Grid from '@material-ui/core/Grid'
import Pokemon from '../components/Pokemon/Pokemon'
import { NotificationContainer } from 'react-notifications'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'


const useStyles = makeStyles({
})

export async function getStaticProps() {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  var data = await res.json()
  data = data.results

  return {
    props: {
      data
    },
    // re-build the app every hour if something is changed in the api
    revalidate: 60 * 60,
  }
}

export default function Pokemons({ data }) {
  var title = 'Pokémon List | Pokédex'
  var description = 'List of the Pokémons available'

  const classes = useStyles()

  const [howManyInOneRow, setHowManyInOneRow] = useState(4)

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
                  {howManyInOneRow == 4 ? '||||' : '|||'}
                </span>
              </IconButton>
            </Tooltip>
          </div>
          <hr />
          <Box my={4}>
            <Grid container spacing={3}>
              {data.map(value => {
                return (
                  <Pokemon name={value.name} url={value.url} howManyInOneRow={howManyInOneRow} />
                )
              })}
            </Grid>
          </Box>
        </Box>
        <NotificationContainer />
      </LayoutIndent>
    </Layout>
  )
}
