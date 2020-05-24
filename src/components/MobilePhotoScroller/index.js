import React, { useState, useContext } from 'react';


import { Container,ImgItem,StyledRight,StyledLeft } from './styles';
import {filterScroll} from '../../utils/filterScroller'
import { ImagesContext } from '../../contexts/imagesContext';

export default function MobilePhotoScroller({listImages,setImage}) {
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
      <StyledLeft onClick={() => handleSubtract()} />
      {(filterScroll(listImages,currentStart) || []).map((item,index) => {
        return <ImgItem image={item} onClick={() => setImage(currentStart + index)} active={currentImage === currentStart + index}/>
      })}
      <StyledRight onClick={() => handleAdd()}/>
    </Container>

  );
}
