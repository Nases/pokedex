import { makeStyles } from '@material-ui/core/styles'
import LayoutIndent from '../Layout/LayoutIndent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'teal'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <LayoutIndent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="body2" align="left" className='text-white'>
              Made with <i aria-hidden className="fas fa-heart text-red-700"></i> & <i aria-hidden className="fas fa-coffee text-yellow-900"></i> in California.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right" className='text-white'>
              {'© '}
              {new Date().getFullYear()}
              {' '}
              <MuiLink color="inherit" href="https://hasansefaozalp.com/" target='_blank'>
                Hasan Sefa Ozalp.
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      </LayoutIndent>
    </div>
  )
}

export default Footer