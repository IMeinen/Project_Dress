import React from 'react';

import { CustomMenu, ListLinks, StyledClose } from './styles';

export default function BarsMenu({ menuOpened }) {
  return (
    <CustomMenu>
      <StyledClose onClick={() => menuOpened(false)} />
      <ListLinks>
        <li>SOBRE NÓS</li>
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
