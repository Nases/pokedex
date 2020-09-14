import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles, withStyles } from '@material-ui/core/styles'

// blend two hex colors together with an amount
const blendColors = (colorA, colorB, amount) => {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16))
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16))
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0')
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0')
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0')
  return '#' + r + g + b
}

console.log(blendColors('#FF0000', '#00FF66', 0.5));



const ProgresBar = ({ value }) => {

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: blendColors('#FF0000', '#00FF66', value / 100),
    },
  }))(LinearProgress)


  return (<BorderLinearProgress variant="determinate" value={value} />)
}

export default ProgresBar

