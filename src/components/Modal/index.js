import React,{useState,useContext,useEffect} from 'react';


import { StyledClose,ModalContainer } from './styles';
import MobilePhotoScroller from '../MobilePhotoScroller';
import ImageChanger from '../ImageChanger';
import IMG1 from '../../images/teste_mq.jpg';
import IMG2 from '../../images/img2.jpeg';
import IMG3 from '../../images/img3.jpeg';
import IMG4 from '../../images/img4.jpeg';
import IMG5 from '../../images/img5.jpeg';
import Button from '../Button';

import { ImagesContext } from "../../contexts/imagesContext";

const images = [IMG1,IMG2,IMG3,IMG4,IMG5];

export default function Modal({modalOpened}) {
  const { currentImage,setCurrentImage } = useContext(ImagesContext);
  const { currentList,setCurrentList } = useContext(ImagesContext);

  useEffect(() => {
    setCurrentList(images);
  },[]);

  return (
      <ModalContainer>
        <StyledClose onClick={() => modalOpened(false)}> </StyledClose>
        <div className="images-container">
          {/* <PhotoScroller listImages={images} setImage={setCurrentImage}/> */}
          <ImageChanger image={images[currentImage]}  />
          <MobilePhotoScroller listImages={currentList} setImage={setCurrentImage}/>
        </div>
        <div className="data-container" >

          <h1>Aquário - 1274</h1>
          <h2 >R$10.000,00</h2>
          <p style={{marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <Button primary text="CONTATO" style={{marginTop: '30px'}}> </Button>
          <Button primary text="PERGUNTAS FREQUENTES"> </Button>
        </div>
      </ModalContainer>

  );
}
