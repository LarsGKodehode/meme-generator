// CSS
import styles from './Output.module.css';

// Interfaces
interface OutputProps {
  textTop: string,
  textBottom: string,
  imageURL: string,
  memeAlt: string,
};


// COMPONENT
function Output(props: OutputProps) {
  const {
    textTop,
    textBottom,
    imageURL,
    memeAlt,
  } = props;

  return(
    <section className={styles['output-wrapper']}>
      <article className={styles['meme']}>
        <img className={styles['image']} src={imageURL} alt={memeAlt} />
        <h1 className={[styles['text-top'], 'font-large'].join(' ')}>{textTop}</h1>
        <h1 className={[styles['text-bottom'], 'font-large'].join(' ')}>{textBottom}</h1>
      </article>
    </section>
  );
};

export default Output;