import React, { useContext, useEffect, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import {
  Container,
  CloseButton,
  StyledClose,
  StyledRight,
  StyledLeft,
  LeftButton,
  RightButton,
} from './styles';
import { ButtonContext } from '../../contexts/buttonContext';
import { ImagesContext } from '../../contexts/imagesContext';

function ScreenImageView({ setOpen }) {
  const { showRightButton, setShowRightButton } = useContext(ButtonContext);
  const { currentImage, setCurrentImage } = useContext(ImagesContext);
  const { currentList, setCurrentList } = useContext(ImagesContext);
  const [currentStart, setCurrentStart] = useState(currentImage);

  const handleSubtract = () => {
    if (currentStart - 1 >= 0) {
      setCurrentStart(currentStart - 1);
    }
    if (currentImage - 1 >= 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleAdd = () => {
    if (currentStart + 1 <= currentList.length - 4) {
      setCurrentStart(currentStart + 1);
    }

    if (currentImage + 1 < currentList.length) {
      setCurrentImage(currentImage + 1);
    }
  };

  useEffect(() => {
    setShowRightButton(false);
  }, []);

  return (
    <Container>
      <CloseButton
        onClick={() => {
          setOpen(false);
          setShowRightButton(true);
        }}
      >
        <StyledClose />
      </CloseButton>
      <TransformWrapper
        defaultScale={1}
      >
        <LeftButton onClick={() => handleSubtract()}>
          <StyledLeft />
        </LeftButton>
        <TransformComponent >
          <img src={currentList[currentImage]} alt="dress" className="image" />
        </TransformComponent>
        <RightButton onClick={() => handleAdd()}>
          <StyledRight />
        </RightButton>
      </TransformWrapper>
    </Container>
  );
}

export default ScreenImageView;
