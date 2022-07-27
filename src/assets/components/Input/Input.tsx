// React
import { ChangeEventHandler, ComponentState, FormEventHandler } from 'react';

// Components
import TextInput from '../subComponents/textInput/TextInput';
import ButtonInput from '../subComponents/buttonInput/ButtonInput';

// CSS
import styles from './Input.module.css';


// Interface
interface InputProps {
  handleInput: ChangeEventHandler,
  handleSubmit: FormEventHandler,
  data: ComponentState,
};

// COMPONENT
function Input(props: InputProps) {
  const {
    handleInput,
    handleSubmit,
    data,
  } = props;

  // Props definition
  // Text input
  const textInputPropsTop = {
    name: 'textInputTop',
    placeholder: 'Type top text here',
    handleInput: handleInput,
    data: data,
  };
  const textInputPropsBottom = {
    name: 'textInputBottom',
    placeholder: 'Type bottom text here',
    handleInput: handleInput,
    data: data,
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