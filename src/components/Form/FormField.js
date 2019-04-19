import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormField = ({currentData,onChange})=>{

  return (
    Object.keys(currentData).map(
      (item)=>
        <TextField
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

export default FormField;
