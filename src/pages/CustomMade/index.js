import React, { useState, useEffect, useCallback } from 'react';

import BackGroundImage from '../../images/custom_made.jpg';
import { ContainerAbout } from './styles';
import ContactContainer from '../../components/ContactInformations';
import Footer from '../../components/Footer';


export default function CustomMade() {
  return (
    <ContainerAbout>
      <img alt="author" src={BackGroundImage} />
      <div className="description-container">
        <h1>// SOB MEDIDA</h1>
        <p>
          Participe de todos os passos da criação do vestido dos seus sonhos,
          onde a sensibilidade, sutileza e cumplicidade são aspectos chave,
          acontece o processo que irá criar uma processo que irá criar uma
          relação de confiança entre nós, para que o trabalho resulte no melhor
          possível, um vestido com estilo e sua personalidade.
        </p>
      </div>
      <ContactContainer />
      <Footer />
    </ContainerAbout>
  );
}
