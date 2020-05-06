import React from 'react';
import Logo from '../../images/logo_sandra_original.png';
import { Header, LogoIMG, StyledBars } from './styles';

export default function HeaderGlobal() {
  return (
    <>
      <Header>
        <LogoIMG src={Logo} />
        <div className="header-links">
          <ul>
            <li>
              <a href="/">SOBRE NÓS</a>
            </li>
            <li>
              <a href="/">NOIVAS</a>
            </li>
            <li>
              <a href="/">CONTATOS</a>
            </li>
            <div className="appointment">
              <a href="/">MARQUE SEU HORÁRIO</a>
            </div>
          </ul>
        </div>
        <StyledBars />
      </Header>
      <div style={{ width: '100%', height: '100px' }} />
    </>
  );
}
