import React, { useState, useEffect, useCallback } from 'react';


import { Container,ImgItem,StyledRight,StyledLeft } from './styles';
import {filterScroll} from '../../utils/filterScroller'

export default function MobilePhotoScroller({listImages,setImage}) {
  const [currentStart,setCurrentStart] = useState(0);

  const handleSubtract = () => {
    console.log('sub',currentStart)
    if(currentStart - 1 >= 0){
      setCurrentStart(currentStart - 1)
    }
  }

  const handleAdd = () => {
    console.log('add',currentStart)
    if(currentStart + 1 <= listImages.length - 4){
      setCurrentStart(currentStart + 1)
    }
  }

  return(
    <Container>
      <StyledLeft onClick={() => handleSubtract()} />
      {(filterScroll(listImages,currentStart) || []).map((item,index) => {
        return <ImgItem image={item} onClick={() => setImage(index)}/>
      })}
      <StyledRight onClick={() => handleAdd()}/>
    </Container>

  );
}
