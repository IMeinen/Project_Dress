import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import CollectionData from '../../constants/Shoes';
import { Container, DescriptionContent,ShoesImage } from './styles';

import Footer from '../../components/Footer';

export default function Collections() {
  const { collection } = useParams();
  const [currentCollection, setCurrentCollection] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setCurrentCollection(CollectionData.filter((obj) => obj.link === collection)[0]);
  },[collection])
  return (
    <>
      {currentCollection && (
        <Container>
          {/* <DescriptionContent>
            <h1>{currentCollection.title}</h1>
            <div className="subdescription">
              <p>{currentCollection.description}</p>
            </div>
          </DescriptionContent> */}
          {(currentCollection.images || []).map((shoe) => {
            return <ShoesImage src={shoe.shoe} alt="test" align={shoe.align}/>;
          })}

        </Container>
      )}
      <Footer />
    </>
  );
}
