import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CollectionData from '../../constants/Shoes';
import { Container, DescriptionContent, DressImage, ShoesImage } from './styles';
import ModalShoes from '../../components/ModalShoes';
import Overlay from '../../components/Overlay';
import Footer from '../../components/Footer';

import { ImagesContext } from '../../contexts/imagesContext';

export default function Shoes() {
  const { collection } = useParams();
  const [currentCollection, setCurrentCollection] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const { currentList, setCurrentList } = useContext(ImagesContext);
  const { currentName, setCurrentName } = useContext(ImagesContext);
  const { currentDesc, setCurrentDesc } = useContext(ImagesContext);
  const { currentValue, setCurrentValue } = useContext(ImagesContext);
  const { current6xCard, setCurrent6xCard } = useContext(ImagesContext);
  const { current6xCheck, setCurrent6xCheck } = useContext(ImagesContext);
  const { originalValue,setOriginalValue } = useContext(ImagesContext);
  const { sizes,setSizes } = useContext(ImagesContext);
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
              <ModalShoes modalOpened={setModalOpened} />
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
              <ShoesImage
                src={image.image}
                alt="test"
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
                  setSizes(image.sizes)
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
