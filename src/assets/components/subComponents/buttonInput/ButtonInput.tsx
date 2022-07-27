// CSS
import styles from './ButtonInput.module.css';

// Interface
interface ButtonCreateInfo {
  text: string,
};


// COMPONENT
function Button(props: ButtonCreateInfo) {
  const {
    text,
  } = props;

  return(
    <input
      type='submit'
      value={text}
      className={styles['button-wrapper']} />
  );
};

export default Button;