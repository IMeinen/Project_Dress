import React from 'react';

import Footer from '../../components/Footer';
import FaqItem from '../../components/FaqItem';
import {Container} from './styles';

export default function Faq() {
  return (
    <>
      <Container>
        <FaqItem />
      </Container>
      <Footer />
    </>
  );
}
