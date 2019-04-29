import React from 'react';
import InputButton from '../InputButton/InputButton';

const FormButton = ({onChange,btnDisable})=> {
  const button ={
    file:{type:'file',id:'contained-button-file',text:'Upload Image',name:'btnFile',onChange:onChange},
    submit:{type:'submit',id:'note-submit',text:'add new',name:'btnSub',btnDisable:btnDisable},
  }
  return (
    <div className='formBtn' style={{display:'flex',flexGrow:1,justifyContent:'space-between'}}>
      {Object.keys(button).map(item=><InputButton key={item} btnInfo={button[item]} />)}
    </div>
  );
}

export default FormButton;
