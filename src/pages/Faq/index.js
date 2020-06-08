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
          <div className="subdescription" />
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
