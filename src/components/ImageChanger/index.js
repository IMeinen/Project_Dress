import React, { useState } from 'react';

import { CustomImage } from './styles';
import ScreenImageView from '../ScreenImageView';

export default function ImageChanger({ image,type }) {
  const [viewerOpen, setViewerOpen] = useState(false);
  return (
    // <TransformWrapper
    //   defaultScale={1}
    //     defaultPositionX={200}
    //     defaultPositionY={100}>
    //   <TransformComponent>
    <>
    {viewerOpen  && <ScreenImageView setOpen={setViewerOpen} type={type}/> }
    <CustomImage image={image} type={type} onClick={() => setViewerOpen(true)}>
      {/* <img src={image} className="image"/> */}
    </CustomImage>
    </>
    //   </TransformComponent>
    // </TransformWrapper>
  );
}
