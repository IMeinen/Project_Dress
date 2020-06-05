import React, { useState, useContext, useEffect } from 'react';

import { StyledClose, ModalContainer } from './styles';
import MobilePhotoScroller from '../MobilePhotoScroller';
import PhotoScroller from '../PhotoScroller';
import ImageChanger from '../ImageChanger';
import IMG1 from '../../images/teste_mq.jpg';
import IMG2 from '../../images/img2.jpeg';
import IMG3 from '../../images/img3.jpeg';
import IMG4 from '../../images/img4.jpeg';
import IMG5 from '../../images/img5.jpeg';
import Button from '../Button';

import { ImagesContext } from '../../contexts/imagesContext';

export default function Modal({ modalOpened }) {
  const { currentImage, setCurrentImage } = useContext(ImagesContext);
  const { currentList, setCurrentList } = useContext(ImagesContext);
  const { currentStart, setCurrentStart } = useContext(ImagesContext);
  const { currentName, setCurrentName } = useContext(ImagesContext);
  const { currentDesc, setCurrentDesc } = useContext(ImagesContext);
  const { currentValue, setCurrentValue } = useContext(ImagesContext);

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
      <h2>{currentValue}</h2>
        <p style={{ marginTop: '20px' }}>{currentDesc}</p>
        <Button primary text="CONTATO" style={{ marginTop: '30px' }}>
          {' '}
        </Button>
        <Button primary text="PERGUNTAS FREQUENTES">
          {' '}
        </Button>
      </div>
    </ModalContainer>
  );
}
