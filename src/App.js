import React, { useState, useMemo } from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import RightButton from './components/RightButton';
import { ButtonContext } from './contexts/buttonContext';
import { ImagesContext } from './contexts/imagesContext';

function App() {
  const [showRightButton, setShowRightButton] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentList, setCurrentList] = useState([]);

  const buttonContext = useMemo(
    () => ({ showRightButton, setShowRightButton }),
    [showRightButton, setShowRightButton]
  );
  const imageContext = useMemo(() => ({ currentImage, setCurrentImage,currentList, setCurrentList }), [
    currentImage,
    setCurrentImage,
    currentList,
    setCurrentList,
  ]);
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
