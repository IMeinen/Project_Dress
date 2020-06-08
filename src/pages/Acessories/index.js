import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import CollectionData from '../../constants/Acessories';
import {Container, AcessorieImage,DescriptionContent } from './styles';
import  Logo from '../../images/Acessories/logo_duas_noivas.png';

import Footer from '../../components/Footer';

export default function Acessories() {

  const { year } = useParams();
  const [currentCollection, setCurrentCollection] = useState([]);

  useEffect(() => {
    setCurrentCollection(CollectionData.filter((obj) => obj.link === year)[0]);
  },[year])
  return (
    <>
      {currentCollection && (
        <Container>
           <DescriptionContent>
            <h1>{currentCollection.title}</h1>
            <div className="subdescription">
              <img src={Logo} alt="logo" width="40%"/>
            </div>
          </DescriptionContent>
          {(currentCollection.images || []).map((acessorie) => {
            return <AcessorieImage src={acessorie.image} alt="test" width={acessorie.width}/>;
          })}

        </Container>
      )}
       <Footer />
    </>
  );
}
