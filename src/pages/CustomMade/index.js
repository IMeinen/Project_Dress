/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useEffect} from 'react';

import { ContainerAbout, ContainerInfos } from './styles';
import ContactContainer from '../../components/ContactInformations';
import Footer from '../../components/Footer';
import VideoPlayer from '../../components/VideoPlayer';

export default function CustomMade() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <ContainerAbout>
      <ContainerInfos>
        <VideoPlayer
          url="https://www.youtube.com/watch?v=jgPbcRh-eoU"
          playing
          controls

        />
        <div className="description-container">
          <h1>// SOB MEDIDA</h1>
          <p>
            Participe de todos os passos da criação do vestido dos seus sonhos,
            onde a sensibilidade, sutileza e cumplicidade são aspectos chave,
            acontece o processo que irá criar uma processo que irá criar uma
            relação de confiança entre nós, para que o trabalho resulte no
            melhor possível, um vestido com estilo e sua personalidade.
          </p>
        </div>
      </ContainerInfos>
      <ContactContainer isHeader={false} />
      <Footer />
    </ContainerAbout>
  );
}
