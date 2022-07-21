// CSS
import styles from './Output.module.css';
// Image Path
import imagePath from '../../images/meme-sample.jpg';

interface OutputProps {
  textTop: string,
  textBottom: string,
  imageURL: string,
  memeAlt: string,
};

const outputProps: OutputProps = {
  textTop: 'ES6',
  textBottom: `But it ain't Neurosurgery`,
  imageURL: imagePath,
  memeAlt: `ES6 might be hard to learn, but there exists stuff that's harder`,
}

function Output(props: OutputProps) {
  // TEMP
  props = outputProps;

  const {
    textTop,
    textBottom,
    imageURL,
    memeAlt,
  } = props;

  console.log()

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