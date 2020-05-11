import React from 'react';
import { Link } from 'react-router-dom';

import { CustomMenu, ListLinks, StyledClose } from './styles';

export default function BarsMenu({ menuOpened }) {
  return (
    <CustomMenu>
      <StyledClose onClick={() => menuOpened(false)} />
      <ListLinks>
        <Link to="/about" onClick={() => menuOpened(false)} >SOBRE NÓS</Link>
        <Link to="/collection/nevoa" onClick={() => menuOpened(false)} >COLEÇÃO // NÉVOA</Link>
        <Link to="/collection/rose-white" onClick={() => menuOpened(false)} >COLEÇÃO // ROSE WHITE</Link>

        <li>SAPATOS</li>
        <li>ACESSÓRIOS DE CABELO</li>
        <li>VESTIDOS SOB-MEDIDA</li>
        <li>CONTATO</li>
        <div className="appointment">
          <li>MARQUE SEU HORÁRIO</li>
        </div>
      </ListLinks>
    </CustomMenu>
  );
}
