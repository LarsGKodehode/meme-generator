// React
import { ChangeEventHandler, ComponentState } from 'react';

// CSS
import styles from './TextInput.module.css';

// Interface
interface TextInputCreateInfo {
  name: string,
  placeholder: string,
  handleInput: ChangeEventHandler,
  data: ComponentState,
};


// COMPONENT
function Text(props: TextInputCreateInfo) {
  const {
    name,
    placeholder,
    handleInput,
    data,
  } = props;

  return(
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className={styles['text-input-wrapper']}
      onChange={handleInput}
      value={data[name]}
    >
    </input>
  );
};

export default Text;