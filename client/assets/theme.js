import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontSize: 16
  },
  palette: {
    background: {
      default: '#f7fafc',
    },
  },
})

export default theme
