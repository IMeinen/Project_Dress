import React, { useState, useEffect, useCallback } from 'react';


import Footer from '../../components/Footer';
import ContactInformations from '../../components/ContactInformations';
import {Container,ContainerMessage} from './styles';


export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Container>
      <ContactInformations isHeader />
      <ContainerMessage />

    </Container>
    <Footer />
    </>
  );
}
