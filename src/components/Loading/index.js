import React from 'react';

import { CustomLoader,OverlayContainer } from './styles';

export default function Loading() {
  return (
    <OverlayContainer>
      <CustomLoader type="bubbles" color="#191919" />
      <p>Carregando</p>
    </OverlayContainer>
  );
}
