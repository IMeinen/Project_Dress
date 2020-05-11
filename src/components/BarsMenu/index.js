import React from 'react';
import { Link } from 'react-router-dom';

import { CustomMenu, ListLinks, StyledClose } from './styles';

export default function BarsMenu({ menuOpened }) {
  return (
    <CustomMenu>
      <StyledClose onClick={() => menuOpened(false)} />
      <ListLinks>
        <Link to="/about" onClick={() => menuOpened(false)} >SOBRE NÓS</Link>
        <li>NOIVAS</li>
        <li>COLEÇÃO // NÉVOA</li>
        <li>COLEÇÃO // ROSE WHITE</li>
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
