import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Container, CloseButton, StyledClose, CustomImage } from './styles';

function ScreenImageView({ setOpen, image }) {
  return (
    <Container>
      <CloseButton onClick={() => setOpen(false)}>
        <StyledClose />
      </CloseButton>
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        <TransformComponent>
          {/* <CustomImage > */}
          <img src={image} className="image" alt="dress" />
          {/* </CustomImage> */}
        </TransformComponent>
      </TransformWrapper>
    </Container>
  );
}

export default ScreenImageView;
