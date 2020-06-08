import React, { useState, useEffect, useCallback } from 'react';

import BackGroundImage from '../../images/custom_made.jpg';
import { ContainerAbout,ContainerInfos} from './styles';
import ContactContainer from '../../components/ContactInformations';
import Footer from '../../components/Footer';


export default function CustomMade() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <ContainerAbout>
      <ContainerInfos>
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
      </ContainerInfos>
      <ContactContainer isHeader={false} />
      <Footer />
    </ContainerAbout>
  );
}
