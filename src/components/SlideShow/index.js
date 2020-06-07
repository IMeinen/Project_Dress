import React, { useState, useEffect, useCallback } from 'react';

import { Container, Discovery, LinkButton, RightIndicator,OnlifeContainer } from './styles';

import Onlife from '../../images/Carrossel/Onlife.jpg';
import Onlife_logo from '../../images/Carrossel/Onlife_logo.png';
import Dress1 from '../../images/Carrossel/NEVOA.jpg';
import Dress2 from '../../images/Carrossel/NOIVADO.jpg';
import Dress3 from '../../images/Carrossel/SAGITARIO.jpg';
import Dress4 from '../../images/Carrossel/LAST_CHANCE_FESTA.jpg';
import Dress5 from '../../images/Carrossel/LAST_CHANCE_NOIVA.jpg';

const dresses = [
  {
    photo: Onlife,
    align: '70%',
    color: '#191919',
    textColor: '#191919',
    collection: '',
    link: '/about',
    Onlife: true
  },
  {
    photo: Dress1,
    align: 'center',
    color: '#191919',
    textColor: '#191919',
    collection: '// COLEÇÃO NÉVOA',
    link: '/collection/nevoa',
  },
  {
    photo: Dress2,
    align: 'center',
    color: '#191919',
    collection: '// COLEÇÃO NOIVADO',
    link: '/collection/noivado',
  },
  {
    photo: Dress3,
    align: 'center',
    color: '#191919',
    collection: '// COLEÇÃO ZODÍACO',
    link: '/collection/zodiaco',
  },
  {
    photo: Dress4,
    align: 'center',
    color: '#191919',
    textColor: '#191919',
    collection: '// LAST CHANCE NOIVA',
    link: '/collection/last-chance-noiva',
  },
  {
    photo: Dress5,
    align: 'center',
    color: '#191919',
    textColor: '#191919',
    collection: '// LAST CHANCE FESTA',
    link: '/collection/last-chance-festa',
  },
];
export default function SlideShow() {
  const [currentImage, setCurrentImage] = useState(dresses[0].photo);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (counter === dresses.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 8000);
  }, [currentImage]);

  useEffect(() => {
    setCurrentImage(dresses[counter].photo);
  }, [counter]);

  return (
    <Container BGImage={currentImage} align={dresses[counter].align}>
      {dresses[counter].Onlife && <OnlifeContainer>

        <img src={Onlife_logo} alt="onLife" />
        <p>// Com a praticidade do pronta entrega e a exclusividade do sob-medida.</p>
        </OnlifeContainer>}
      <Discovery
        color={dresses[counter].color}
        textColor={dresses[counter].textColor}
      >
        <span >{dresses[counter].collection}</span>
        <LinkButton
          to={dresses[counter].link}
          color={dresses[counter].color}
          textColor={dresses[counter].textColor}
        >
          <p>{dresses[counter].Onlife ? 'SAIBA MAIS'  : 'DESCUBRA' }</p>
          <RightIndicator color={dresses[counter].color} />
        </LinkButton>
      </Discovery>
    </Container>
  );
}
