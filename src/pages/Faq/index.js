/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useEffect} from 'react';


import Footer from '../../components/Footer';
import FaqItem from '../../components/FaqItem';
import { Container} from './styles';
import { FAQ } from '../../constants/Faq';


export default function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
