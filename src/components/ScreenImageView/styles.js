import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const StyledClose = styled(MdClose)`
  position: absolute;

  transition: all 0.3s;
  color: #373739;
  font-size: 56px;
  z-index: 1000;

  @media only screen and (max-width: 1025px) {
    top: 10px;
    right: 10px;
    font-size: 28px;
  }

`;

export const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #373739;
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 1007;
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 1007;
  .image {
    margin-top: 80px;
    width: 100%;
  }

`;

export const CustomImage = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  .image {
    width: 100%;
  }
`;
