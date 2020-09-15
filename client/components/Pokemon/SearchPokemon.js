import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { pokemonList } from '../../assets/pokemonList'

const SearchPokemon = () => {
  return (
    <Autocomplete
      options={pokemonList.map(value => value.name.charAt(0).toUpperCase() + value.name.slice(1))}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a Pokémon"
          margin="normal"
        />
      )}
    />
  )
}

export default SearchPokemon