import React, { useState, useEffect, useCallback } from 'react';


import Footer from '../../components/Footer';
import ContactInformations from '../../components/ContactInformations';
import {ContainerMessage} from './styles';


export default function Contact() {
  return (
    <>
      <ContactInformations isHeader />
      <ContainerMessage />
      <Footer />
    </>

  );
}
