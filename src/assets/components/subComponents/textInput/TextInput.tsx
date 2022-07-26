// React
import { ChangeEventHandler } from 'react';

// CSS
import styles from './TextInput.module.css';

// Interface
interface TextInputCreateInfo {
  placeholder: string,
  handleInput: ChangeEventHandler,
};


// COMPONENT
function Text(props: TextInputCreateInfo) {
  const {
    placeholder,
    handleInput,
  } = props;

  return(
    <textarea
      placeholder={placeholder}
      className={styles['text-input-wrapper']}
      onChange={handleInput}
    >
    </textarea>
  );
};

export default Text;