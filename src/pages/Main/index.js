import React, { useState, useEffect, useCallback } from 'react';

import Vestido1 from '../../images/vestido1.jpg';
import { Content, DescriptionContent } from './styles';
import Modal from '../../components/Modal';
import Overlay from '../../components/Overlay';
import SlideShow from '../../components/SlideShow';
import Footer from '../../components/Footer';

export default function Main() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      {modalOpened && (
        <Overlay>
          <Modal modalOpened={setModalOpened}> </Modal>
        </Overlay>
      )}

      <Content>
        <SlideShow />
        <Footer />
      </Content>
    </>
  );
}
