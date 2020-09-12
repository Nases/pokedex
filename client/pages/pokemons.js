import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Copyright from '../components/Copyright'
import Layout from '../components/Layout'

export default function About() {
  var title = `Pokemon List | Pokedex`
  var description = 'List of the Pokemons available'

  return (
    <Layout title={title} description={description}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Pokomon List
        </Typography>
          <Button variant="contained" color="primary" component={Link} naked href="/">
            Go to the main page
        </Button>
          <ProTip />
        </Box>
      </Container>
    </Layout>
  )
}
