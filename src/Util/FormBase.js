import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormBase = ({currentData,classes,onChange})=>{

  return (
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
            onChange = {onChange}
        />
    )
  )
}

export default FormBase;
