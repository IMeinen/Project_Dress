import React, { useState, useEffect, useCallback } from 'react';

import { Container,Discovery,LinkButton, RightIndicator } from './styles';
import Dress1 from '../../images/vestido_landing1.jpg';
import Dress2 from '../../images/vestido_landing2.jpg';

const dresses = [
  { photo: Dress1, align: 'center', color: 'black', collection: '// COLEÇÃO ROSE WHITE', link: '/collection/rose-white' },
  { photo: Dress2, align: 'left', color: 'white', collection: '// COLEÇÃO NÉVOA' , link: '/collection/nevoa' },
];
export default function SlideShow() {
  const [currentImage, setCurrentImage] = useState(dresses[0].photo);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (counter === dresses.length - 1) {
        setCounter(0);
      } else {
        setCounter(1);
      }
    }, 10000);
  }, [currentImage]);

  useEffect(() => {
    setCurrentImage(dresses[counter].photo);
  }, [counter]);

  return (<Container BGImage={currentImage} align={dresses[counter].align}>
    <Discovery color={dresses[counter].color}>
      <span>{dresses[counter].collection}</span>
      <LinkButton to={dresses[counter].link} color={dresses[counter].color}>
        <p>DESCUBRA </p>
        < RightIndicator color={dresses[counter].color} />
      </LinkButton>
    </Discovery>

  </Container>);
}
