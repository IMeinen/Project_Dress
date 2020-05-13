import React, { useState, useEffect, useCallback } from 'react';


import Footer from '../../components/Footer';
import ContactInformations from '../../components/ContactInformations';
import {ContainerMessage} from './styles';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

export default function Contact() {
  return (
    <>
      <ContactInformations/>
      <ContainerMessage>
        <Input />
        <Input />
        <TextArea />
      </ContainerMessage>
      <Footer />
    </>

  );
}
