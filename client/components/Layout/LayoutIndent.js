import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  indent: {
    maxWidth: '80rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    width: '100%'
  }
}))

const LayoutIndent = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.indent}>
      {children}
    </div>
  )
}

export default LayoutIndent