import React from 'react';
import PropTypes from 'prop-types';
import { OverlayContainer,Content } from './styles';

export default function Overlay({children}) {

  return (
    <OverlayContainer test-id="overlay-container">
      <Content test-id="overlay-content">{children}</Content>
    </OverlayContainer>
  );
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
}
