import Pokemon from './Pokemon'

const ShowSearchedPokemon = ({ name }) => {
  return (
    // <Pokemon name={value.name} url={value.url} howManyInOneRow={3} key={value.name} favFilterOn={false} />
    <>
      {name ? <Pokemon name={name} url='https://pokeapi.co/api/v2/pokemon/1/' howManyInOneRow={3} key='name' favFilterOn={false} /> : ''}
    </>
  )
}

export default ShowSearchedPokemon