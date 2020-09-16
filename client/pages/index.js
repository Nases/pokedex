import React from 'react'
import Layout from '../components/Layout/Layout'
import WelcomeScreen from '../components/WelcomeScreen'

export default function Index() {
  var title = 'Home | Pokédex'
  var description = 'Home page of Pokédex'

  return (
    <Layout title={title} description={description}>
      <WelcomeScreen />
    </Layout>
  )
}
