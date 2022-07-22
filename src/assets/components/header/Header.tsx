// CSS
import styles from './Header.module.css';


// Interfaces
interface SVGCreateInfo {
  data: string, // Path to svg
  type: string, // 'image/svg+xml' for svg
};

interface Props {
  text: string,
  svg: SVGCreateInfo,
};


// COMPONENT
function Header(props: Props) {
  const {
    svg: svgInfo,
    text,
  } = props;

  return(

    <header className={styles['header-wrapper']}>

      <object className={styles['svg']} {...svgInfo}></object>
      <span className={[styles['text'], 'font-big'].join(' ')}>{text}</span>
      <object className={styles['svg']} {...svgInfo}></object>
      
    </header>
  );
};

export default Header;