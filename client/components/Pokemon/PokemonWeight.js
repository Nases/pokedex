import { useState, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'


const PokemonWeight = ({ pokemonWeight }) => {
  const [weight, setWeight] = useState()
  const [weightCoverted, setWeightConverted] = useState(false)

  useEffect(() => {
    setWeight(pokemonWeight)
  }, [])

  const setTwoNumberDecimal = input => {
    return input = parseFloat(input).toFixed(1)
  }

  const convertWeight = () => {
    if (!weightCoverted) {
      setWeight(prevState => setTwoNumberDecimal(prevState * 2.205))
    } else {
      setWeight(prevState => setTwoNumberDecimal(prevState / 2.205))
    }
    setWeightConverted(prevState => !prevState)
  }


  return (
    <Tooltip title={weightCoverted ? 'Convert to kg' : 'Convert to lb'} placement="right" className='cursor-pointer'>
      <Typography onClick={convertWeight} className='pl-4 text-gray-700'>
        <i aria-hidden className="fas fa-weight-hanging"></i>
        {' '}
        {`${weight} ${weightCoverted ? 'lb' : 'kg'}`}
      </Typography>
    </Tooltip>
  )
}

export default PokemonWeight