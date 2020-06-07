import React from 'react';
import ReactPlayer from "react-player"

import Footer from '../../components/Footer';
import FaqItem from '../../components/FaqItem';
import { Container} from './styles';
import { FAQ } from '../../constants/Faq';
import Video from '../../videos/Sandra_01.mp4';

export default function Faq() {
  return (
    <>
      <Container>
        <div className="description">
          <h1>// COMO FUNCIONA</h1>
          <div className="subdescription">
          <p>
            Com a objetividade e praticidade de um vestido de noiva a pronta
            entrega e toda a exclusividade do sob medida, Sandra Ferraz OnLife
            busca elevar a experiência da noiva moderna a uma nova categoria,
            onde sem sair do aconchego de sua casa, você poderá escolher, provar
            e comprar o vestido dos seus sonhos, vivendo uma experiência única e
            intimista.
          </p>
          </div>
          {/* <StyledVideo
            key="https://www.youtube.com/watch?v=2S24-y0Ij3Y"
            autoPlay
            controls
          >
            <source
              src="https://www.youtube.com/watch?v=2S24-y0Ij3Y"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </StyledVideo> */}

        </div>
        {FAQ.map((item, index) => {
          return <FaqItem question={item.question} answer={item.answer} />;
        })}
      </Container>
      <Footer />
    </>
  );
}
