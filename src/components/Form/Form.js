import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  },
  input: {
    display: 'none'
  },
  button: {
    color:'#303f9f',
    margin:'1.5rem auto',
    '&:hover': {
      backgroundColor:'#303f9f',
      color:'white'
    }
  }
});
const Form = ({classes,onchange,onsubmit,currentData})=>{

  return (
    <React.Fragment>
      <Typography
            component='h2'
            paragraph={true}
            align='center'
            className={classes.typography}
      >
        Compose Your Note Below
      </Typography>
      <form className={classes.form} onSubmit={onsubmit}>
        {
          Object.keys(currentData).map(
            (item)=>
              <TextField
                  className={classes.textField}
                  key ={item}
                  id={item}
                  name={item}
                  label={item}
                  value={currentData[item]}
                  margin="dense"
                  fullWidth={item==='content'}
                  onChange = {onchange}
              />
          )
        }
        <input
        id="note-submit"
        type="submit"
        className={classes.input}
      />
      <label htmlFor="note-submit">
        <Button variant="outlined" component="span" className={classes.button}>
          add new
        </Button>
      </label>
      </form>
    </React.Fragment>
  );
}

export default withStyles(styles)(Form);
