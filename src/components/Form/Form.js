import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles= theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  typography: {
    fontSize:'1.5rem',
    marginTop: '1rem',
  }
});
const Form = ({classes})=>{

  return (
    <React.Fragment>
      <Typography component='h2' paragraph={true} align='center' className={classes.typography}>
        Compose Your Note Below
      </Typography>
      <form className={classes.form}>
        <TextField
            className={classes.textField}
            id="note-title"
            label="Title"
            margin="dense"
        />
        <TextField
            className={classes.textField}
            id="note-name"
            label="Name"
            margin="dense"
        />
        <TextField
            className={classes.textField}
            fullWidth = {true}
            id="note-content"
            label="content"
            margin="dense"
        />
      </form>
    </React.Fragment>
  );
}

export default withStyles(styles)(Form);
