import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import LayoutIndent from '../Layout/LayoutIndent'
import Grid from '@material-ui/core/Grid'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'teal',
    padding: 14
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const dispatchUserData = useDispatchUser()

  const user = useUser()
  var isAuth = user.isAuth

  console.log(isAuth)

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
              {
                isAuth ? user.data.email
                  :
                  <>
                    <Link href="/login">
                      <Button color="inherit"><a>Log In</a></Button>
                    </Link>
                    <Link href="/signup">
                      <Button color="inherit"><a>Sign Up</a></Button>
                    </Link>
                  </>
              }

            </Typography>
          </Grid>
        </Grid>
      </LayoutIndent>
    </AppBar >
  )
}