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
import InfiniteScroll from "react-infinite-scroll-component"
import CircularProgress from '@material-ui/core/CircularProgress'
import SearchPokemon from '../components/Pokemon/SearchPokemon'
import ShowSearchedPokemon from '../components/Pokemon/ShowSearchedPokemon'


export default function Pokemons() {
  var title = 'Pokémon List | Pokédex'
  var description = 'List of the Pokémons available'

  const [data, setData] = useState([])
  const [howManyInOneRow, setHowManyInOneRow] = useState(4)
  const [favFilterOn, setfavFilterOn] = useState(false)
  const [nextPokemonsURL, setNextPokemonsURL] = useState()
  const [searchedPokemonName, setSearchedPokemonName] = useState()


  const toggleHowManyInOneRow = () => {
    setHowManyInOneRow(prevState => {
      if (prevState === 4) {
        return 3
      } else {
        return 4
      }
    })
  }

  const LoadingMore = () => {
    return (
      <div className='my-16 text-center'>
        <CircularProgress />
      </div>
    )
  }

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(value => {
      setData(value.data.results)
      setNextPokemonsURL(value.data.next)
    })
  }, [])

  const getNewPokemons = () => {
    setTimeout(() => {
      axios.get(nextPokemonsURL).then(value => {
        setData(prevState => {
          const newData = prevState.concat(value.data.results)
          return newData
        })
        setNextPokemonsURL(value.data.next)
      })
    }, 1000)
  }

  return (
    <EnsureAuth>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <Box my={4}>
            <Typography variant="h4" component="h1" align='center'>
              Pokémon List
            </Typography>
            <SearchPokemon setSearchedPokemonName={setSearchedPokemonName} />
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
            <Box my={4}>
              {
                searchedPokemonName
                  ? <ShowSearchedPokemon name={searchedPokemonName} />
                  : <InfiniteScroll
                    dataLength={data.length}
                    next={getNewPokemons}
                    hasMore={true}
                    loader={!favFilterOn ? <LoadingMore /> : ''}
                    scrollThreshold={1}
                    style={{ overflow: 'visible' }}
                  >
                    <Grid container spacing={3}>
                      {data.map(value => {
                        return (
                          <Pokemon name={value.name} url={value.url} howManyInOneRow={howManyInOneRow} key={value.name} favFilterOn={favFilterOn} />
                        )
                      })}
                    </Grid>
                  </InfiniteScroll>
              }
            </Box>
          </Box>
          <NotificationContainer />
        </LayoutIndent>
      </Layout>
    </EnsureAuth >
  )
}
