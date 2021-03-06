import React from 'react';
import muitheme from '../../Util/muiTheme';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles,MuiThemeProvider} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  title: {
    display:'none',
    color:'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin:'auto',
    width: '84%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    color: 'white',
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  grow: {
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
    },
  },
});

const Header = ({classes,value,onChange})=>{

  return (
    <MuiThemeProvider theme={muitheme}>
      <AppBar position='static' color='default'>
        <Toolbar className={classes.toolbar} >
          <Typography className={classes.title} variant="h6" color="inherit" >
              My Awesome Notepad
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange = {onChange}
              value ={value}
              className={classes.inputInput}
              classes={{root:classes.inputRoot}}
              placeholder="search…" />
          </div>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}
export default withStyles(styles)(Header);
