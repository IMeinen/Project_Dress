import React, { useContext } from 'react';

import {
  StyledClose,
  ModalContainer
} from './styles';
import MobilePhotoScroller from '../MobilePhotoScroller';
import PhotoScroller from '../PhotoScroller';
import ImageChanger from '../ImageChanger';
import Button from '../Button';

import { ImagesContext } from '../../contexts/imagesContext';

export default function ModalShoes({ modalOpened }) {
  const { currentImage, setCurrentImage } = useContext(ImagesContext);
  const { currentList} = useContext(ImagesContext);
  const { setCurrentStart } = useContext(ImagesContext);
  const { currentName } = useContext(ImagesContext);
  const { currentDesc } = useContext(ImagesContext);
  const { currentValue } = useContext(ImagesContext);
  const { current6xCard } = useContext(ImagesContext);

  const {originalValue } = useContext(ImagesContext);


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
        <ImageChanger image={currentList[currentImage]} type="shoe" />
        <MobilePhotoScroller
          listImages={currentList}
          setImage={setCurrentImage}
        />
      </div>
      <div className="data-container">
        <h1>{currentName}</h1>
        {originalValue &&  <h3>{`De : ${originalValue}`}</h3>}
        {originalValue &&  <h2>{`Por : ${currentValue}`}</h2>}
        {!originalValue &&  <h2>{`${currentValue} ( à vista )`}</h2>}

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
