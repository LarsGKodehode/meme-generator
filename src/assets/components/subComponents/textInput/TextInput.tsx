// CSS
import styles from './TextInput.module.css';

interface TextInputCreateInfo {
  placeholder: string,
};

const textInputProps: TextInputCreateInfo = {
  placeholder: 'Type text here'
};

function Text(props: TextInputCreateInfo) {
  // TEMP
  props = textInputProps;

  const {
    placeholder,
  } = props;

  // Component
  return(
    <textarea placeholder={placeholder} className={styles['text-input-wrapper']}>
    </textarea>
  );
};

export default Text;