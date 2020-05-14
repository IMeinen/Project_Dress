
import React from 'react';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { CustomImage } from './styles';

export default function ImageChanger({image}) {
  return (
    <TransformWrapper>
      <TransformComponent>
        <CustomImage src={image}  />
      </TransformComponent>
    </TransformWrapper>
  );
}

