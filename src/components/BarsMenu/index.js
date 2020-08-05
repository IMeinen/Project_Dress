import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  CustomMenu,
  ListLinks,
  StyledClose,
  Acordeon,
  IconActive,
} from './styles';

export default function BarsMenu({ menuOpened }) {
  const [activeNoivas, setActiveNoivas] = useState(false);
  const [activeLastChance, setActiveLastChance] = useState(false);
  const [activeShoes, setActiveShoes] = useState(false);
  return (
    <CustomMenu>
      <StyledClose onClick={() => menuOpened(false)} />
      <ListLinks>
        <Link to="/about" onClick={() => menuOpened(false)}>
          <h1>SOBRE NÓS</h1>
        </Link>
        <Acordeon
          active={activeNoivas}
          onClick={() => setActiveNoivas(!activeNoivas)}
        >
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
            <Link to="/collection/noivado" onClick={() => menuOpened(false)}>
              <h1>COLEÇÃO // NOIVADO</h1>
            </Link>
          </div>
        </Acordeon>

        <Acordeon
          active={activeShoes}
          onClick={() => setActiveShoes(!activeShoes)}
        >
          <div className="title">
            <h1>SAPATOS</h1>
            <IconActive rotate={activeShoes} />
          </div>
          <div className="internal-items">
            <Link to="/shoes/2019" onClick={() => menuOpened(false)}>
              <h1>COLEÇÃO // 2019</h1>
            </Link>
            <Link to="/shoes/2020" onClick={() => menuOpened(false)}>
              <h1>COLEÇÃO // 2020</h1>
            </Link>
          </div>
        </Acordeon>
        <Link to="/acessories/2019" onClick={() => menuOpened(false)}>
          <h1>ACESSÓRIOS DE CABELO</h1>
        </Link>

        <Link to="/custom-made" onClick={() => menuOpened(false)}>
          <h1>VESTIDO SOB-MEDIDA</h1>
        </Link>
        <Link to="/contact" onClick={() => menuOpened(false)}>
          <h1>CONTATO</h1>
        </Link>
        <Acordeon active={activeLastChance} onClick={() => setActiveLastChance(!activeLastChance)}>
            <div className="title">
            <h1>LAST CHANCE</h1>
            <IconActive rotate={activeLastChance} />
            </div>
            <div className="internal-items">
              <Link to="/collection/last-chance-festa" onClick={() => menuOpened(false)}>
                <h1>FESTA</h1>
              </Link>
              <Link to="/collection/last-chance-noiva" onClick={() => menuOpened(false)}>
                <h1>NOIVA</h1>
              </Link>
            </div>
          </Acordeon>

        <div className="appointment">
          <a
            href="https://sandra-ferraz.reservio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MARQUE SEU HORÁRIO
          </a>
        </div>
      </ListLinks>
    </CustomMenu>
  );
}
