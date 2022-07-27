// React
import { BaseSyntheticEvent, ComponentState, useEffect, useState, StrictMode } from 'react';

// Components
import Header from './assets/components/header/Header';
import Output from './assets/components/Output/Output';
import Input from './assets/components/Input/Input';

// CSS
import './App.css';

// SVG Path
import svgURL from './assets/images/Peace.svg';
import { randomInt } from './libs/utility';


// ===== External API calling =====
// Image web API
const imageURL = "https://api.imgflip.com/get_memes";
// Imgflip API interface
interface ImgflipResponse extends Response {
  success: boolean,
  data: {memes: Meme[]},
};
interface MemeState {
  allMemes: Meme[],
  currentMemeUrl: String,
};
interface Meme {
  id: String,
  name: String,
  url: String,
  width: Number,
  height: Number,
  box_count: Number
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
  const [allMemes, setAllMemes] = useState<MemeState>(
    {
      allMemes: [],
      currentMemeUrl: "",
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

  // Initial image fetch
  useEffect(() => {
    fetch(imageURL)
      .then((response => response.json()))
      .then((parsed) => {
        handleNewImages(parsed);
      });
  }, []);

  function handleNewImages(response: ImgflipResponse): void {
    if(response.success) {
      setAllMemes((previousMemes): any => {
        return {
          ...previousMemes,
          allMemes: response.data.memes,
        };
      });
    };
  };

  function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    setAllMemes((previousState) => {
      return {
        ...previousState,
        currentMemeUrl: getNewMemeUrl(),
      }
    });
  };

  function getNewMemeUrl(): String {
    const newMemeUrl = allMemes.allMemes[Math.floor(Math.random() * allMemes.allMemes.length)].url;
    return newMemeUrl;
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
    imageURL: allMemes.currentMemeUrl,
  };

  // Input
  const inputProps = {
    handleInput: handleStateChange,
    handleSubmit: handleSubmit,
    data: allMemes.currentMemeUrl,
  };
  
  return (
  <StrictMode>
    <main className='App' data-theme="bright">

      <Header {...headerProps}/>
      <Output {...outputProps}/>
      <Input {...inputProps}/>

    </main>
  </StrictMode>
  );
};

export default App;