import { createMuiTheme } from '@material-ui/core/styles';


const muithemetheme = createMuiTheme({
  typography: {
   useNextVariants: true,
  },
  overrides: {
    MuiAppBar: {
      colorDefault:{
        backgroundColor:'#3949ab',
      }
    }
  }
});

export default muithemetheme;
