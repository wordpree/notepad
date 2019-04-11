import React from 'react';
import muitheme from '../../Util/muiTheme';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles,MuiThemeProvider} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  title: {
    display:'none',
    color:'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
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
    flexGrow: 1,
  },
});

const Header = ({classes})=>{

  return (
    <MuiThemeProvider theme={muitheme}>
      <AppBar position='static' color='default'>
        <Toolbar >
          <Typography className={classes.title} variant="h6" color="inherit" >
              Notepad
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              className={classes.inputInput}
              classes={{root:classes.inputRoot}}
              placeholder="Search…" />
          </div>
          <div className={classes.grow} />
          <Tooltip title="Add" placement="bottom" TransitionComponent={Zoom}>
            <Fab color="primary" aria-label="Add" size="small">
              <AddIcon />
            </Fab>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}
export default withStyles(styles)(Header);
