// React
import { ChangeEventHandler } from 'react';

// CSS
import styles from './TextInput.module.css';

// Interface
interface TextInputCreateInfo {
  name: string,
  placeholder: string,
  handleInput: ChangeEventHandler,
};


// COMPONENT
function Text(props: TextInputCreateInfo) {
  const {
    name,
    placeholder,
    handleInput,
  } = props;

  return(
    <textarea
      name={name}
      placeholder={placeholder}
      className={styles['text-input-wrapper']}
      onChange={handleInput}
    >
    </textarea>
  );
};

export default Text;