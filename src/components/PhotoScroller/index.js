import React, { useState, useContext, useCallback } from 'react';


import { Container,ImgItem } from './styles';
import { ImagesContext } from '../../contexts/imagesContext';
import {filterScroll} from '../../utils/filterScroller'

export default function PhotoScroller({listImages,setImage}) {
  const { currentStart, setCurrentStart } = useContext(ImagesContext);
  const { currentImage,setCurrentImage } = useContext(ImagesContext);


  const handleSubtract = () => {

    if(currentStart - 1 >= 0){
      setCurrentStart(currentStart - 1)
    }
  }

  const handleAdd = () => {

    if(currentStart + 1 <= listImages.length - 4){
      setCurrentStart(currentStart + 1)
    }
  }
  return(
    <Container>
       {(filterScroll(listImages,currentStart) || []).map((item,index) => {
        return <ImgItem image={item} onClick={() => setImage(currentStart + index)} active={currentImage === currentStart + index}/>
      })}
    </Container>

  );
}
