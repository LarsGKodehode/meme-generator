// Components
import Header from './assets/components/header/Header';
import Output from './assets/components/Output/Output';
import Input from './assets/components/Input/Input';

// CSS
import './App.css';


// ===== Local props definition =====

// header
// SVG Path
import svgURL from './assets/images/Peace.svg';

const headerProps = {
  text: 'Meme Generator',
  svg: {
    data: svgURL, // Path to svg
    type: 'image/svg+xml',
    },
};

// Output
// Image Path
import imagePath from './assets/images/meme-sample.jpg';

const outputProps = {
  textTop: 'ES6',
  textBottom: `But it ain't Neurosurgery`,
  imageURL: imagePath,
  memeAlt: `ES6 might be hard to learn, but there exists stuff that's harder`,
};


// COMPONENT
function App() {

  return (
    <main className='App'>

      <Header {...headerProps}/>
      <Output {...outputProps}/>
      <Input />

    </main>
  );
};

export default App;