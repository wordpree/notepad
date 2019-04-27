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

const InputButton = ({btnInfo,classes})=> {

  let {id ,type ,text,name,onChange} =btnInfo;
  const insider = onChange ? {
    onChange:onChange,
    id:id,
    type:type,
    accept:'image/*',
  }:
  {
    id:id,
    type:type,
  };
  return (
  <div className='input'>
      <input
        {...insider} style={{display:'none'}}
      />
      <label htmlFor={id}>
       <Button variant='outlined' component="span" className={classes.button }>
         {text}
       </Button>
      </label>
  </div>
  );
 }

export default withStyles(styles)(InputButton);
