// Components
import TextInput from '../subComponents/textInput/TextInput';
import ButtonInput from '../subComponents/buttonInput/ButtonInput';

// CSS
import styles from './Input.module.css';

// Interfaces External
import { BaseSyntheticEvent } from 'react';


// COMPONENT
function Input() {

  // Handles the input submit functionality
  function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
  };

  // Props definition
  // Text input
  const textInputPropsTop = {
    placeholder: 'Type top text here'
  };
  const textInputPropsBottom = {
    placeholder: 'Type bottom text here'
  };

  // ButtonInput
  const buttonInput = {
    text: 'Generate new meme'
  };

  // DOM
  return(

    <form onSubmit={handleSubmit} className={[styles['input-wrapper'], 'font-large'].join(' ')}>

      <TextInput {...textInputPropsTop}/>
      <TextInput {...textInputPropsBottom}/>
      <ButtonInput {...buttonInput}/>
      
    </form>
  );
};

export default Input;