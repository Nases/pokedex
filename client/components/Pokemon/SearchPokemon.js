import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { pokemonList } from '../../assets/pokemonList'
import { pokemonNames } from '../../assets/pokemonNames'

const SearchPokemon = ({ setSearchedPokemonName }) => {
  const [inputValue, setInputValue] = React.useState('')

  return (
    <>
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
          if (pokemonNames.includes(newInputValue)) {
            setSearchedPokemonName(newInputValue)
          } else {
            setSearchedPokemonName(null)
          }
        }}
        autoHighlight
        clearOnEscape
        options={pokemonList.map(value => value.name.charAt(0).toUpperCase() + value.name.slice(1))}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a Pokémon"
            margin="normal"
          />
        )}
      />
    </>
  )
}

export default SearchPokemon