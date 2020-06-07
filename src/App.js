import React, { useState, useMemo } from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import RightButton from './components/RightButton';
import { ButtonContext } from './contexts/buttonContext';
import { ImagesContext } from './contexts/imagesContext';

function App() {
  const [showRightButton, setShowRightButton] = useState(true);
  const [currentSlide,setCurrentSlide] = useState('infos');
  const [currentImage, setCurrentImage] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const [currentStart, setCurrentStart] = useState(0);
  const [currentName, setCurrentName] = useState('');
  const [currentDesc, setCurrentDesc] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const buttonContext = useMemo(
    () => ({ showRightButton, setShowRightButton,currentSlide,setCurrentSlide }),
    [showRightButton, setShowRightButton,currentSlide,setCurrentSlide]
  );
  const imageContext = useMemo(
    () => ({
      currentImage,
      setCurrentImage,
      currentList,
      setCurrentList,
      currentStart,
      setCurrentStart,
      currentName,
      setCurrentName,
      currentDesc,
      setCurrentDesc,
      currentValue,
      setCurrentValue,
    }),
    [
      currentImage,
      setCurrentImage,
      currentList,
      setCurrentList,
      currentStart,
      setCurrentStart,
      currentDesc,
      setCurrentDesc,
      currentName,
      setCurrentName,
      currentValue,
      setCurrentValue,
    ]
  );
  return (
    <>
      <ButtonContext.Provider value={buttonContext}>
        {showRightButton && <RightButton />}
        <ImagesContext.Provider value={imageContext}>
          <Routes />
        </ImagesContext.Provider>
      </ButtonContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
