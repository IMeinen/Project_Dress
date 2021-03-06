import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CollectionData from '../../constants/Collections';
import { Container, DescriptionContent, DressImage } from './styles';
import Modal from '../../components/Modal';
import Overlay from '../../components/Overlay';
import Footer from '../../components/Footer';

import { ImagesContext } from '../../contexts/imagesContext';

export default function Collections() {
  const { collection } = useParams();
  const [currentCollection, setCurrentCollection] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const { setCurrentList } = useContext(ImagesContext);
  const { setCurrentName } = useContext(ImagesContext);
  const { setCurrentDesc } = useContext(ImagesContext);
  const { setCurrentValue } = useContext(ImagesContext);
  const { setCurrent6xCard } = useContext(ImagesContext);
  const { setCurrent6xCheck } = useContext(ImagesContext);
  const { setOriginalValue } = useContext(ImagesContext);
  const { setSizes } = useContext(ImagesContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setCurrentCollection(
      CollectionData.filter((obj) => obj.link === collection)[0]
    );
  }, [collection]);
  return (
    <>
      {currentCollection && (
        <Container>
          {modalOpened && (
            <Overlay>
              <Modal modalOpened={setModalOpened} />
            </Overlay>
          )}
          <DescriptionContent>
            <h1>{currentCollection.title}</h1>
            <div className="subdescription">
              <p>{currentCollection.description}</p>
            </div>
          </DescriptionContent>
          {(currentCollection.images || []).map((image) => {
            return (
              <DressImage
                image={image.image}
                width={image.width}
                onClick={() => {
                  setCurrentList(image.listOfImages);
                  setModalOpened(true);
                  setCurrentName(image.name);
                  setCurrentDesc(image.description);
                  setCurrentValue(image.value);
                  setCurrent6xCard(image.parcelCard);
                  setCurrent6xCheck(image.parcelCheck);
                  setOriginalValue(image.originalValue);
                  setSizes(image.sizes);
                }}
                adjustTop={image.adjustTop}
              />
            );
          })}
        </Container>
      )}
      <Footer />
    </>
  );
}
