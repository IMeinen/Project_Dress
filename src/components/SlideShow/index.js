import React, { useState, useEffect, useCallback } from 'react';


import { Container } from './styles';
import Dress1 from '../../images/vestido_landing1.jpg';
import Dress2 from '../../images/vestido_landing2.jpg';

const dresses = [{photo : Dress1 , align: 'center'}, {photo: Dress2,align: 'left'}]
export default function SlideShow() {
  const [currentImage,setCurrentImage] = useState(dresses[0].photo);
  const [counter,setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if(counter === dresses.length -  1){
        setCounter(0)
      }else{
        setCounter(1)
      }
  }, 10000);
  },[currentImage]);

  useEffect(() => {
    setCurrentImage(dresses[counter].photo)
  },[counter]);

  return(
    <Container BGImage={currentImage} align={dresses[counter].align}/>
  )
  }
