// React
import { BaseSyntheticEvent, ComponentState, EffectCallback, useEffect, useState } from 'react';

// Components
import Header from './assets/components/header/Header';
import Output from './assets/components/Output/Output';
import Input from './assets/components/Input/Input';

// CSS
import './App.css';

// SVG Path
import svgURL from './assets/images/Peace.svg';

// Image web API
const imageURL = "https://api.imgflip.com/get_memes";
// Imgflip API interface
interface ImgflipResponse extends Response {
  success: boolean,
  data: Memes,
};
interface Memes {
  memes: [
    id: string,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number
  ]
};


// COMPONENT
function App() {
  // State managment
  const [data, setData] = useState(
    {
      textInputTop: "",
      textInputBottom: "",
    }
  );
  const [imageData, setImageData] = useState(
    {
      imageData: [],
    }
  );

  function handleStateChange(event: BaseSyntheticEvent) {
    const { name, value } = event.target;
    setData((previousData: ComponentState): ComponentState => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    fetch(imageURL)
      .then((response => response.json()))
      .then((parsed) => {
        handleNewImages(parsed);
      });
  }, []);

  function handleNewImages(response: ImgflipResponse): void {
    if(response.success) {
      console.log(response.data.memes)
      setImageData((): any => response.data.memes)
    }
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
    textTop: data.textInputTop,
    textBottom: data.textInputBottom,
    imageURL: imageData,
    memeAlt: `ES6 might be hard to learn, but there exists stuff that's harder`,
  };

  // Input
  const inputProps = {
    handleInput: handleStateChange,
    data: data
  };

  return (
    <main className='App' data-theme="bright">

      <Header {...headerProps}/>
      <Output {...outputProps}/>
      <Input {...inputProps}/>

    </main>
  );
};

export default App;