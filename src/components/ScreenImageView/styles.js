import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi';

export const StyledClose = styled(MdClose)`
  position: absolute;

  transition: all 0.3s;
  color: #191919;
  font-size: 56px;
  z-index: 1002;

  @media only screen and (max-width: 1025px) {
    top: 50%;
    right: 50%;
    transform : translate(50%, -50%);
    font-size: 28px;
  }

`;

export const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #191919;
  position: absolute;
  right: 5%;
  top: 7%;
  z-index: 1007;
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 1007;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;


  .image{

    width: 100%;
    object-fit: cover;

  }
`;

export const StyledRight = styled(FiChevronRight)`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);


  width: 26px;
  height: 26px;
  color: #191919;
`;

export const StyledLeft = styled(FiChevronLeft)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  width: 26px;
  height: 26px;
  color: #191919;
`;

export const LeftButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 1007;
  opacity: 0.6;
`;

export const RightButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1007;
  opacity: 0.6;
`;
