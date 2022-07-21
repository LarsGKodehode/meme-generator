// Components
import TextInput from '../subComponents/textInput/TextInput';
import ButtonInput from '../subComponents/buttonInput/ButtonInput';

// CSS
import styles from './Input.module.css';

// Local props definition
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
}


// COMPONENT
function Input() {
  return(

    <form className={[styles['input-wrapper'], 'font-large'].join(' ')}>

      <TextInput {...textInputPropsTop}/>
      <TextInput {...textInputPropsBottom}/>
      <ButtonInput {...buttonInput}/>
      
    </form>
  );
};

export default Input;