import React from 'react';
import FormField from './FormField';
import FormSubmit from './FormSubmit';

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
};

const Form = (props)=>{
  const {classes,onchange,onsubmit,currentData} = props;
  return (
    <form style={styles} onSubmit={onsubmit}>
      <FormField currentData={currentData} classes={classes} onChange = {onchange}/>
      <FormSubmit classes={classes}/>
    </form>
  );
}

export default Form;
