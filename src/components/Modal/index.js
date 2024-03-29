import React, { useState, useContext } from 'react';

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
import { findTable } from '../../utils/findTable';
import { ImagesContext } from '../../contexts/imagesContext';

export default function Modal({ modalOpened }) {
  const { currentImage, setCurrentImage } = useContext(ImagesContext);
  const { currentList } = useContext(ImagesContext);
  const {  setCurrentStart } = useContext(ImagesContext);
  const { currentName } = useContext(ImagesContext);
  const { currentDesc} = useContext(ImagesContext);
  const { currentValue } = useContext(ImagesContext);
  const { current6xCard } = useContext(ImagesContext);
  const { current6xCheck } = useContext(ImagesContext);
  const {originalValue} = useContext(ImagesContext);
  const { sizes } = useContext(ImagesContext);
  const [activeMeasure, setActiveMeasure] = useState(false);

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
        <ImageChanger image={currentList[currentImage]} type="dress" />
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

        {current6xCheck && <h4>{`${current6xCheck} em 6x no cheque`}</h4>}
        {current6xCard && <h4>{`${current6xCard} em 6x no cartão`}</h4>}
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
        <Measure
          onClick={() => setActiveMeasure(!activeMeasure)}
          active={activeMeasure}
        >
          <div className="line">
            <span>MEDIDAS</span>
            <IconActive rotate={activeMeasure} />
          </div>
          <ContentMeasure active={activeMeasure}>
            <p>O vestido pode ser ajustado para os seguintes tamanhos:</p>

            <img src={findTable(sizes)} alt="tabela_medidas" />
            <p className='low_text'>
              <strong>* Modelo veste: Busto 85cm | Cintura 62cm | Quadril 91cm | Altura 177cm </strong>
            </p>
          </ContentMeasure>
        </Measure>
      </div>
    </ModalContainer>
  );
}
