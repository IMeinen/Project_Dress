import React, { useState } from 'react';

import { ContainerLinks, SubMenu,StyledLink } from './styles';

export default function HeadersSubMenu({openSubMenu}) {
  return <SubMenu>
    <ContainerLinks>
      <StyledLink to="/collection/rose-white" onClick={() => openSubMenu(false)}>
        <span>COLEÇÃO // ROSE WHITE</span>
      </StyledLink>
      <StyledLink to="/collection/zodiaco" onClick={() => openSubMenu(false)}>
        <span>COLEÇÃO // ZODÍACO</span>
      </StyledLink>
      <StyledLink to="/shoes/2019" onClick={() => openSubMenu(false)}>
        <span>SAPATOS</span>
      </StyledLink>
      <StyledLink to="/acessories/2019" onClick={() => openSubMenu(false)}>
        <span>ACESSÓRIOS DE CABELO</span>
      </StyledLink>
      <StyledLink to="/custom-made" onClick={() => openSubMenu(false)}>
        <span>VESTIDO SOB MEDIDA</span>
      </StyledLink>
    </ContainerLinks>
  </SubMenu>;
}
