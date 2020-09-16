import { useEffect } from 'react'

import Pokemon from './Pokemon'



const ShowSearchedPokemon = ({ name }) => {


  return (
    <>
      {name ? <Pokemon name={name} url={`https://pokeapi.co/api/v2/pokemon/${name.charAt(0).toLowerCase() + name.slice(1)}/`} howManyInOneRow={4} key={name} favFilterOn={false} /> : ''}
    </>
  )
}

export default ShowSearchedPokemon