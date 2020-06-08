import React from 'react';
import Footer from '../../components/Footer';
import { Container} from './styles';
import VideoPlayer from '../../components/VideoPlayer';


export default function Measurements() {
  return (
    <>
      <Container>
        <div className="description">
          <h1>// COMO TIRAR MINHAS PRÓPRIAS MEDIDAS?</h1>
          <div className="subdescription" />


        </div>
        <VideoPlayer
        url="https://www.youtube.com/watch?v=0wN_SznJnns"
        playing
        controls
      />
      </Container>
      <Footer />
    </>
  );
}
