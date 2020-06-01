import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CustomMenu, ListLinks, StyledClose, Acordeon,IconActive } from './styles';

export default function BarsMenu({ menuOpened }) {
  const [activeNoivas, setActiveNoivas] = useState(false);

  return (
    <CustomMenu>
      <StyledClose onClick={() => menuOpened(false)} />
      <ListLinks>
        <Link to="/about" onClick={() => menuOpened(false)}>
          <h1>SOBRE NÓS</h1>
        </Link>
        <Acordeon active={activeNoivas} onClick={() => setActiveNoivas(!activeNoivas)}>
          <div className="title">
          <h1>NOIVAS</h1>
          <IconActive rotate={activeNoivas} />
          </div>
          <div className="internal-items">
            <Link to="/collection/nevoa" onClick={() => menuOpened(false)}>
              <h1>COLEÇÃO // NÉVOA</h1>
            </Link>
            <Link to="/collection/zodiaco" onClick={() => menuOpened(false)}>
              <h1>COLEÇÃO // ZODÍACO</h1>
            </Link>
          </div>
        </Acordeon>

        <Link to="/shoes/2019" onClick={() => menuOpened(false)}>
          <h1>SAPATOS</h1>
        </Link>
        <Link to="/acessories/2019" onClick={() => menuOpened(false)}>
          <h1>ACESSÓRIOS DE CABELO</h1>
        </Link>

        <Link to="/custom-made" onClick={() => menuOpened(false)}>
          <h1>VESTIDO SOB-MEDIDA</h1>
        </Link>
        <Link to="/contact" onClick={() => menuOpened(false)}>
          <h1>CONTATO</h1>
        </Link>
        <Link to="/quizz" onClick={() => menuOpened(false)}>
          <h1>QUIZZ</h1>
        </Link>

        <div className="appointment">
          <a href="https://sandra-ferraz.reservio.com/">MARQUE SEU HORÁRIO</a>
        </div>
      </ListLinks>
    </CustomMenu>
  );
}
