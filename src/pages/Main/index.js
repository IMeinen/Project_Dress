import React, { useState, useContext, useEffect } from 'react';


import { Content} from './styles';
import Modal from '../../components/Modal';
import Overlay from '../../components/Overlay';
import Loading from '../../components/Loading';
import SlideShow from '../../components/SlideShow';
import Footer from '../../components/Footer';
import {ButtonContext} from '../../contexts/buttonContext';

export default function Main() {
  const [modalOpened, setModalOpened] = useState(false);
  const {loading,setLoading} = useContext(ButtonContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },750)

  },[setLoading]);
  return (
    <>
      {!loading &&

        <>
        {modalOpened &&
          <Overlay>
            <Modal modalOpened={setModalOpened}> </Modal>
          </Overlay>
        }
        <Content>
          <SlideShow />
          <Footer />
        </Content>
      </>}
      {
        loading && <Loading />
      }
    </>

  );
}
