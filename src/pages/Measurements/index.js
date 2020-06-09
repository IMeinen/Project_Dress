import React,{useEffect} from 'react';
import Footer from '../../components/Footer';
import { Container , VideoContainer} from './styles';
import VideoPlayer from '../../components/VideoPlayer';


export default function Measurements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Container>
        <div className="description">
          <h1>// COMO TIRAR MINHAS PRÓPRIAS MEDIDAS?</h1>
          <div className="subdescription" />


        </div>
        <VideoContainer>
        <VideoPlayer
        url="https://www.youtube.com/watch?v=0wN_SznJnns"
        playing
        controls
      />
      </VideoContainer>
      </Container>
      <Footer />
    </>
  );
}
