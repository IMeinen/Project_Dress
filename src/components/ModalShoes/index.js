import React, { useState, useContext, useEffect } from 'react';

import {
  StyledClose,
  ModalContainer,
  Measure,
  IconActive,
  ContentMeasure,
} from './styles';
import MobilePhotoScroller from '../MobilePhotoScroller';
import PhotoScroller from '../PhotoScroller';
import ImageChanger from '../ImageChanger';
import Button from '../Button';

import { ImagesContext } from '../../contexts/imagesContext';

export default function ModalShoes({ modalOpened }) {
  const { currentImage, setCurrentImage } = useContext(ImagesContext);
  const { currentList, setCurrentList } = useContext(ImagesContext);
  const { currentStart, setCurrentStart } = useContext(ImagesContext);
  const { currentName, setCurrentName } = useContext(ImagesContext);
  const { currentDesc, setCurrentDesc } = useContext(ImagesContext);
  const { currentValue, setCurrentValue } = useContext(ImagesContext);
  const { current6xCard, setCurrent6xCard } = useContext(ImagesContext);
  const { current6xCheck, setCurrent6xCheck } = useContext(ImagesContext);
  const { sizes, setSizes } = useContext(ImagesContext);

  return (
    <ModalContainer>
      <StyledClose
        onClick={() => {
          modalOpened(false);
          setCurrentImage(0);
          setCurrentStart(0);
        }}
      >
        {' '}
      </StyledClose>
      <div className="images-container">
        <PhotoScroller listImages={currentList} setImage={setCurrentImage} />
        <ImageChanger image={currentList[currentImage]} />
        <MobilePhotoScroller
          listImages={currentList}
          setImage={setCurrentImage}
        />
      </div>
      <div className="data-container">
        <h1>{currentName}</h1>
        <h2>{`${currentValue} ( à vista )`}</h2>

        {current6xCard && <h4>{`${current6xCard} em 4x no cartão`}</h4>}
        <p style={{ marginTop: '20px' }}>{currentDesc}</p>
        <Button
          primary
          text="CONVERSE CONOSCO"
          style={{ marginTop: '30px' }}
          to="/contact"
        >
          {' '}
        </Button>
        <Button primary text="PERGUNTAS FREQUENTES" to="/faq">
          {' '}
        </Button>

      </div>
    </ModalContainer>
  );
}
