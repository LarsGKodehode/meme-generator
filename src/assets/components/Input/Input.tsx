// React
import { BaseSyntheticEvent, ChangeEventHandler } from 'react';

// Components
import TextInput from '../subComponents/textInput/TextInput';
import ButtonInput from '../subComponents/buttonInput/ButtonInput';

// CSS
import styles from './Input.module.css';


// Interface
interface InputProps {
  handleInput: ChangeEventHandler,
};

// COMPONENT
function Input(props: InputProps) {
  const { handleInput } = props;

  // Handles the input submit functionality
  function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
  };

  // Props definition
  // Text input
  const textInputPropsTop = {
    name: 'textInputTop',
    placeholder: 'Type top text here',
    handleInput: handleInput,
  };
  const textInputPropsBottom = {
    name: 'textBottomTop',
    placeholder: 'Type bottom text here',
    handleInput: handleInput,
  };

  // ButtonInput
  const buttonInput = {
    text: 'Generate new meme'
  };

  // DOM
  return(

    <form
      onSubmit={handleSubmit}
      className={
        [styles['input-wrapper'],
          'font-large',
        ].join(' ')
      }>

      <TextInput {...textInputPropsTop}/>
      <TextInput {...textInputPropsBottom}/>
      <ButtonInput {...buttonInput}/>
      
    </form>
  );
};

export default Input;