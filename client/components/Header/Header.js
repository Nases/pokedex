import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import LayoutIndent from '../Layout/LayoutIndent'
import Grid from '@material-ui/core/Grid'
import MuiLink from '@material-ui/core/Link'



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'teal',
    padding: 14
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <LayoutIndent>
        <Grid container>
          <Grid item xs={6}>
            <div className='cursor-pointer'>
              <Link href="/">
                <Typography variant="h6">
                  <a>
                    Pokédex
                    </a>
                </Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography align='right'>
              <Button color="inherit">Login</Button>
            </Typography>
          </Grid>
        </Grid>
      </LayoutIndent>
    </AppBar >
  )
}