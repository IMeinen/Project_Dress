import styled from 'styled-components';

import ReactLoading from "react-loading";

export const CustomLoader = styled(ReactLoading)`
  margin: auto;
  height: 120px;
  width: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #191919;
`;



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
  z-index: 1111!important;
  background-color: #e4e4e4;

  p {
    position: absolute;
    top: 55%;
  }
`;
