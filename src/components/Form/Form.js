import React from 'react';
import FormField from './FormField';
import FormButton from './FormButton';

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
};

const Form = (props)=>{
  const {onChange,onSubmit,currentData,onUpLoad,isUploaded} = props;
  return (
    <form style={styles} onSubmit={onSubmit}>
      <FormField currentData={currentData} onChange = {onChange} />
      <FormButton onChange={onUpLoad} isUploaded={isUploaded} />
    </form>
  );
}

export default Form;
