
import React from 'react';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { CustomImage } from './styles';

export default function ImageChanger({image}) {
  return (
    <TransformWrapper
      defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}>
      <TransformComponent>

          <CustomImage image={image}>
            <img src={image} className="image"/>
          </CustomImage>

      </TransformComponent>
    </TransformWrapper>
  );
}

