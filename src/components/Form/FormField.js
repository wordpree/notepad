import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormField = ({currentData,onChange})=>{

  return (
    Object.keys(currentData).map(
      (item)=>
        <TextField
            style={{marginLeft:'1em'}}
            key ={item}
            id={item}
            name={item}
            label={item}
            value={currentData[item]}
            margin="dense"
            fullWidth=
            {item==='content' || item==='dialogContent'}
            onChange = {onChange}
        />
    )
  )
}

export default FormField;
