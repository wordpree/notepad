import React from 'react';
import FormField from './FormField';
import FormSubmit from './FormSubmit';

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
};

const Form = (props)=>{
  const {onChange,onSubmit,currentData,} = props;
  return (
    <form style={styles} onSubmit={onSubmit}>
      <FormField currentData={currentData} onChange = {onChange}/>
      <FormSubmit />
    </form>
  );
}

export default Form;
