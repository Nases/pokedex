import { useState, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'


const PokemonWeight = ({ pokemonHeight }) => {
  const [height, setHeight] = useState()
  const [heightCoverted, setHeightConverted] = useState(false)

  useEffect(() => {
    setHeight(pokemonHeight)
  }, [])

  const setTwoNumberDecimal = input => {
    return input = parseFloat(input).toFixed(1)
  }

  const convertHeight = () => {
    if (!heightCoverted) {
      setHeight(prevState => setTwoNumberDecimal(prevState * 3.281))
    } else {
      setHeight(prevState => setTwoNumberDecimal(prevState / 3.281))
    }
    setHeightConverted(prevState => !prevState)
  }


  return (
    <Tooltip title={heightCoverted ? 'Convert to m' : 'Convert to ft'} placement="right" className='cursor-pointer'>
      <Typography onClick={convertHeight} className='pl-4 text-gray-700'>
        <i aria-hidden className="fas fa-ruler-vertical"></i>
        {' '}
        {`${height} ${heightCoverted ? 'ft' : 'm'}`}
      </Typography>
    </Tooltip>
  )
}

export default PokemonWeight