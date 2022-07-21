// Components
import TextInput from '../subComponents/textInput/TextInput';
import ButtonInput from '../subComponents/buttonInput/ButtonInput';


// CSS
import styles from './Input.module.css';

function Input() {
  return(

    <form className={[styles['input-wrapper'], 'font-large'].join(' ')}>

      <TextInput />
      <TextInput />
      <ButtonInput />
      
    </form>
  );
};

export default Input;