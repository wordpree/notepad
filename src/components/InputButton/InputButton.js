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

  let {id ,type ,text,name,onChange,btnDisable} =btnInfo;
  const insider = onChange ? {
    onChange:onChange,
    id:id,
    type:type,
    accept:'image/*',
    name:name,
  }:
  {
    id:id,
    type:type,
    name:name,
  };
  return (
  <div className='input'>
      <input
        {...insider} style={{display:'none'}}
      />
      <label htmlFor={id}>
        <Button disabled={btnDisable} variant='outlined' component="span" className={classes.button }>
          {text}
        </Button>
      </label>
  </div>
  );
 }

export default withStyles(styles)(InputButton);
