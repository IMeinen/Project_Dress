import React, { useState, useEffect, useCallback } from 'react';

import Author from '../../images/sandra.jpg';
import { ContainerAbout } from './styles';
import ContactContainer from '../../components/ContactInformations'
import Footer from '../../components/Footer';

import Overlay from '../../components/Overlay';
import HeaderGlobal from '../../components/Header';

export default function About() {
  return (
    <ContainerAbout>
      <img alt="author" src={Author} />
      <div className="description-container">
        <h1>// SOBRE A ESTILISTA</h1>
        <p>
          A mais de dez anos no mercado, apaixonada pelo saber em uma busca
          incansável por referências e novas habilidades. percebe a criação como
          uma fusão de elementos de design, arquitetura e fotografia para criar
          peças únicas para mulheres incríveis.
        </p>
      </div>
      <ContactContainer noHeader isHeader={false}/>
      <Footer />
    </ContainerAbout>
  );
}
