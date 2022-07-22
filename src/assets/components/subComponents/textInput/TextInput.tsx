// CSS
import styles from './TextInput.module.css';

// Interface
interface TextInputCreateInfo {
  placeholder: string,
};


// COMPONENT
function Text(props: TextInputCreateInfo) {
  const {
    placeholder,
  } = props;

  return(
    <textarea placeholder={placeholder} className={styles['text-input-wrapper']}>
    </textarea>
  );
};

export default Text;