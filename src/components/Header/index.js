import React, { useState } from 'react';

import Logo from '../../images/logo_sandra_original.png';
import {
  Header,
  LogoIMG,
  StyledBars,
  StyledLink,
  Gambia,
  PathLink,
  BrideLink,
} from './styles';
import BarsMenu from '../BarsMenu';
import HeaderSubMenu from '../HeaderSubMenu';

export default function HeaderGlobal() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [subMenuOpened, setSubMenuOpened] = useState(false);
  return (
    <>
      {menuOpened && <BarsMenu menuOpened={setMenuOpened} />}

      <Header>
        <StyledLink to="/" onClick={() => setSubMenuOpened(false)}>
          <LogoIMG src={Logo} />
        </StyledLink>
        <div className="header-links">
          <PathLink to="/about" onClick={() => setSubMenuOpened(false)}>
            <span>SOBRE NÓS</span>
          </PathLink>
          <BrideLink onClick={() => setSubMenuOpened(!subMenuOpened)}>
            <span>NOIVAS</span>
          </BrideLink>
          <PathLink to="/contact" onClick={() => setSubMenuOpened(false)}>
            <span>CONTATO</span>
          </PathLink>
          <div className="appointment" onClick={() => setSubMenuOpened(false)}>
            <a href="https://sandra-ferraz.reservio.com/">MARQUE SEU HORÁRIO</a>
          </div>
        </div>
        <StyledBars onClick={() => setMenuOpened(!menuOpened)} />
      </Header>
      <Gambia />
      {subMenuOpened && (
        <HeaderSubMenu
          openSubMenu={setSubMenuOpened}

        />
      )}
    </>
  );
}
