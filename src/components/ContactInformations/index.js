import React from 'react';

import {
  Container,
  ContainerIcon,
  StyledMail,
  StyledInstagram,
  StyledPhone,
} from './styles';

export default function ContactInformations() {
  return (
    <Container>
      <h1>Entre em contato</h1>
      <ContainerIcon>
        <StyledInstagram />
        <div className="link-container">
          <h4>@sandraferrazoficial</h4>

          <span>Nos siga no Instagram</span>
        </div>
        <a
          href="https://www.instagram.com/sandraferrazoficial/"
          className="anchor"
        />
      </ContainerIcon>
      <ContainerIcon>
        <StyledPhone />
        <div className="link-container">
          <h4>+55 51 9261-4347 </h4>

          <span>Nos contate via telefone</span>
        </div>
        <a href="tel:+55%2051%209261-4347%20" className="anchor" />
      </ContainerIcon>
      <ContainerIcon>
        <StyledMail />
        <div className="link-container">
          <h4>contato@sandraferraz.com.br</h4>

          <span>Entre em contato via E-mail</span>
        </div>
        <a href="mailto:contato@sandraferraz.com.br" className="anchor" />
      </ContainerIcon>
    </Container>
  );
}
