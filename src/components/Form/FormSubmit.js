import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    color:'#303f9f',
    margin:'1.5rem auto',
    '&:hover': {
      backgroundColor:'#303f9f',
      color:'white'
    }
  },
}
const FormSubmit = ({classes})=> {

   return (
     <React.Fragment>

       <input
         id="note-submit"
         type="submit"
         style={{display:'none'}}
       />
       <label htmlFor="note-submit">
         <Button variant="outlined" component="span" className={classes.button} >
           add new
         </Button>
       </label>
     </React.Fragment>
   );
 }

export default withStyles(styles)(FormSubmit);
