// React
import { useState } from 'react';

// Components
import Header from './assets/components/header/Header';
import Output from './assets/components/Output/Output';
import Input from './assets/components/Input/Input';

// CSS
import './App.css';


// SVG Path
import svgURL from './assets/images/Peace.svg';
// Image Path
import imagePath from './assets/images/meme-sample.jpg';


// COMPONENT
function App() {
  // State managment
  const [data, setData] = useState();

  function handleStateChange() {
    console.log(arguments);
  };

  // ===== Props definition =====
  // header
  const headerProps = {
    text: 'Meme Generator',
    svg: {
      data: svgURL, // Path to svg
      type: 'image/svg+xml',
      },
  };

  // Output
  const outputProps = {
    textTop: 'ES6',
    textBottom: `But it ain't Neurosurgery`,
    imageURL: imagePath,
    memeAlt: `ES6 might be hard to learn, but there exists stuff that's harder`,
  };

  return (
    <main className='App' data-theme="bright">

      <Header {...headerProps}/>
      <Output {...outputProps}/>
      <Input />

    </main>
  );
};

export default App;