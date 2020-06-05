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
  const { currentList, setCurrentList } = useContext(ImagesContext);
  const { currentName, setCurrentName } = useContext(ImagesContext);
  const { currentDesc, setCurrentDesc } = useContext(ImagesContext);
  const { currentValue, setCurrentValue } = useContext(ImagesContext);

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
            console.log(image)
            return (
              <DressImage
                src={image.image}
                alt="test"
                width={image.width}
                onClick={() => {
                  setCurrentList(image.listOfImages);
                  setModalOpened(true);
                  setCurrentName(image.name);
                  setCurrentDesc(image.description);
                  setCurrentValue(image.value);
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
