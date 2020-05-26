import React from 'react';

import Footer from '../../components/Footer';
import FaqItem from '../../components/FaqItem';
import { Container } from './styles';
import { FAQ } from '../../constants/Faq';

export default function Faq() {
  return (
    <>
      <Container>
        <div className="description">
        <h1>// Perguntas frequentes</h1>
        </div>
        {FAQ.map((item, index) => {
          return (
            <FaqItem
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </Container>
      <Footer />
    </>
  );
}
