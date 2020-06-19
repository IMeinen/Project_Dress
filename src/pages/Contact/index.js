import React, {  useEffect } from 'react';


import Footer from '../../components/Footer';
import ContactInformations from '../../components/ContactInformations';
import {Container} from './styles';


export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Container>
      <ContactInformations isHeader />


    </Container>

    <Footer />
    </>
  );
}
