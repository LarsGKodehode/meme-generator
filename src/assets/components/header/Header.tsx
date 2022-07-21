// CSS
import styles from './Header.module.css';
// SVG Path
import svgURL from '../../images/Peace.svg';


// Interfaces
interface SVGCreateInfo {
  data: string, // path to svg
  type: string, // 'image/svg+xml' for svg
};

interface Props {
  text: string,
  svg: SVGCreateInfo,
};

// Propss definition
const headerSVG: SVGCreateInfo = {
  data: svgURL, // path to svg
  type: 'image/svg+xml',
};

const headerProps: Props = {
  text: 'Meme Generator',
  svg: headerSVG,
};


// COMPONENT
function Header(props: Props) {
  props = headerProps;

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