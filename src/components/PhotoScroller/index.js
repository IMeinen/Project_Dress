import React, {  useContext } from 'react';


import { Container,ImgItem,StyledUp,StyledDown } from './styles';
import { ImagesContext } from '../../contexts/imagesContext';
import {filterScroll} from '../../utils/filterScroller'

export default function PhotoScroller({listImages,setImage}) {
  const { currentStart, setCurrentStart } = useContext(ImagesContext);
  const { currentImage,setCurrentImage } = useContext(ImagesContext);


  const handleSubtract = () => {

    if(currentImage - 1 >= 0){
      setCurrentImage(currentImage - 1)
    }
    if(currentStart - 1 >= 0){
      setCurrentStart(currentStart - 1)
    }
  }

  const handleAdd = () => {

    if(currentImage + 1 <= listImages.length - 1){
      setCurrentImage(currentImage + 1)
    }
    if(currentStart + 1 <= listImages.length - 4){
      setCurrentStart(currentStart + 1)
    }
  }
  return(
    <Container>
      <StyledUp onClick={() => handleSubtract()} />
       {(filterScroll(listImages,currentStart) || []).map((item,index) => {
        return <ImgItem image={item} onClick={() => setImage(currentStart + index)} active={currentImage === currentStart + index}/>
      })}
      <StyledDown onClick={() => handleAdd()}/>
    </Container>

  );
}
