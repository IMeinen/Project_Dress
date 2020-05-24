import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollectionData from '../../constants/Collections';
import { Container, DescriptionContent, DressImage } from './styles';
import Modal from '../../components/Modal';
import Overlay from '../../components/Overlay';
import Footer from '../../components/Footer';


export default function Collections() {
  const { collection } = useParams();
  const [currentCollection, setCurrentCollection] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);


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
                src={image.image}
                alt="test"
                width={image.width}
                onClick={() => {setModalOpened(true)}}
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
