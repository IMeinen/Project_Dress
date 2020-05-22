import React, { useState, useEffect, useCallback } from 'react';


import Footer from '../../components/Footer';
import ContactInformations from '../../components/ContactInformations';
import {Container,ContainerMessage} from './styles';


export default function Contact() {
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
