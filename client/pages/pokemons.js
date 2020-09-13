import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '../components/Link'
import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'

export async function getStaticProps() {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
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
  var title = `Pokémon List | Pokédex`
  var description = 'List of the Pokémons available'

  console.log(data)

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Pokémon List
            </Typography>
          <Button variant="contained" color="primary" component={Link} naked href="/">
            Go to the main page
            </Button>
          {data.map(value => {
            return <p>{value.name}</p>
          })}
        </Box>
      </LayoutIndent>
    </Layout>
  )
}
