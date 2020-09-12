import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Copyright from '../components/Copyright'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'

export default function Index() {
  var title = `Home | Pokedex`
  var description = 'Home page of Pokedex'

  return (
    <Layout title={title} description={description}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Pokedex!
        </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            Log In to get started!
        </Typography>
          <Button variant="contained" color="primary" component={Link} naked href="/pokemons">
            Pokemon List
        </Button>
          <ProTip />
        </Box>
      </Container>
    </Layout>
  )
}
