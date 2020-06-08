import React, { useState, useContext, useEffect } from 'react';

import { StyledClose, ModalContainer,Measure,IconActive,ContentMeasure } from './styles';
import MobilePhotoScroller from '../MobilePhotoScroller';
import PhotoScroller from '../PhotoScroller';
import ImageChanger from '../ImageChanger';
import Button from '../Button';

import { ImagesContext } from '../../contexts/imagesContext';

export default function Modal({ modalOpened }) {
  const { currentImage, setCurrentImage } = useContext(ImagesContext);
  const { currentList, setCurrentList } = useContext(ImagesContext);
  const { currentStart, setCurrentStart } = useContext(ImagesContext);
  const { currentName, setCurrentName } = useContext(ImagesContext);
  const { currentDesc, setCurrentDesc } = useContext(ImagesContext);
  const { currentValue, setCurrentValue } = useContext(ImagesContext);
  const { current6xCard, setCurrent6xCard } = useContext(ImagesContext);
  const { current6xCheck, setCurrent6xCheck } = useContext(ImagesContext);
  const { sizes, setSizes } = useContext(ImagesContext);
  const [activeMeasure,setActiveMeasure] = useState(false);
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
        <h2>{ `${currentValue} ( à vista )` }</h2>
        {current6xCheck  && <h4>{`${current6xCheck} em 6x no cheque`}</h4>}
        {current6xCard  && <h4>{`${current6xCard} em 6x no cartão`}</h4>}
        <p style={{ marginTop: '20px' }}>{currentDesc}</p>
        <Button primary text="CONVERSE CONOSCO" style={{ marginTop: '30px' }} to='/contact'>
          {' '}
        </Button>
        <Button primary text="PERGUNTAS FREQUENTES" to="/faq">
          {' '}
        </Button>
        <Measure onClick={() => setActiveMeasure(!activeMeasure)} active={activeMeasure}>
          <div className="line">
          <span>MEDIDAS</span>
          <IconActive rotate={activeMeasure}/>
          </div>
          <ContentMeasure active={activeMeasure}>
              <p>{`Esse vestido pode ser ajustado para as seguintes medidas: ${sizes}`}</p>
              <p><strong>* A modelo usa</strong></p>
            </ContentMeasure>

        </Measure>
      </div>
    </ModalContainer>
  );
}
