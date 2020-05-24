import styled from 'styled-components';

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed ;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 101!important;
  background-color: #373739aa;

`;

export const Content = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  z-index: 1002;
`;
