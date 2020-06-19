/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext, useEffect } from 'react';

import Author from '../../images/sandra.jpg';
import {
  ContainerAbout,
  ContainerInfos,
  VideoContainer,
  DescContainer,
  BigContainer,
} from './styles';
import ContactContainer from '../../components/ContactInformations';
import VideoPlayer from '../../components/VideoPlayer';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { ButtonContext } from '../../contexts/buttonContext';

export default function About() {
  const {  setCurrentSlide } = useContext(ButtonContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const HandleCollections = () => {
    setCurrentSlide('collections');
  };
  return (
    <ContainerAbout>
      <BigContainer>
        <DescContainer>
          <ContainerInfos>
            <div className="description-onlife">
              <h1>// SANDRA FERRAZ ONLIFE</h1>
              <p>
                Com a objetividade e praticidade de um vestido de noiva a pronta
                entrega e toda a exclusividade do sob medida, Sandra Ferraz
                OnLife busca elevar a experiência da noiva moderna a uma nova
                categoria, onde sem sair do aconchego de sua casa, você poderá
                escolher, provar e comprar o vestido dos seus sonhos, vivendo
                uma experiência única e intimista.
              </p>

              <Button
                primary
                text="CONHEÇA NOSSAS COLEÇÕES"
                clickEvent={() => HandleCollections()}
                className="button-action"
                to="/"
               />
            </div>
          </ContainerInfos>
        </DescContainer>
        <VideoContainer>
          <VideoPlayer
            url="https://www.youtube.com/watch?v=Ng6v9c-n3TE"
            playing
            controls
          />
        </VideoContainer>
      </BigContainer>
      <ContainerInfos>
        <img alt="author" src={Author} />
        <div className="description-container">
          <h1>// SOBRE A ESTILISTA</h1>
          <p>
            A mais de dez anos no mercado, apaixonada pelo saber em uma busca
            incansável por referências e novas habilidades. percebe a criação
            como uma fusão de elementos de design, arquitetura e fotografia para
            criar peças únicas para mulheres incríveis.
          </p>
        </div>
      </ContainerInfos>
      <ContactContainer noHeader isHeader={false} />
      <Footer />
    </ContainerAbout>
  );
}
