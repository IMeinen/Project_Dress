import React from 'react';
import PropTypes from 'prop-types';
import { OverlayContainer,Content } from './styles';

export default function Overlay({children}) {

  return (
    <OverlayContainer >
      <Content>{children}</Content>
    </OverlayContainer>
  );
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
}
