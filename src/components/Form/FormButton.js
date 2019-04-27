import React from 'react';
import InputButton from '../InputButton/InputButton';

const FormButton = ({onChange})=> {
  const button ={
    file:{type:'file',id:'contained-button-file',text:'Upload Image',name:'btnFile',onChange:onChange},
    submit:{type:'submit',id:'note-submit',text:'add new',name:'btnSub'},
  }
  return (
    <div className='formBtn'>
      {Object.keys(button).map(item=><InputButton key={item} btnInfo={button[item]} />)}
    </div>
  );
}

export default FormButton;
