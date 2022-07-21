// CSS
import styles from './ButtonInput.module.css';

interface ButtonCreateInfo {
  text: string,
};

const buttonProps: ButtonCreateInfo = {
  text: 'Generate new meme'
}

function Button(props: ButtonCreateInfo) {
  // TEMP
  props = buttonProps;

  const {
    text,
  } = props

  return(
    <input type='submit' value={text} className={styles['button-wrapper']} />
  );
};

export default Button;