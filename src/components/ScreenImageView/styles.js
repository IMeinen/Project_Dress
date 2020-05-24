import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi';

export const StyledClose = styled(MdClose)`
  position: absolute;

  transition: all 0.3s;
  color: #373739;
  font-size: 56px;
  z-index: 1002;

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
  height: 120vh;
  background: #fff;
  z-index: 1007;



  .image{
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledRight = styled(FiChevronRight)`
  position: absolute;
  right: 1%;
  top: 50%;
  width: 26px;
  height: 26px;
  color: #373739;
`;

export const StyledLeft = styled(FiChevronLeft)`
  position: absolute;
  top: 50%;
  left: 1%;
  width: 26px;
  height: 26px;
  color: #373739;
`;

export const LeftButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 30%;
  left: 1%;
  z-index: 1007;
  opacity: 0.6;
`;

export const RightButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 1%;
  top: 30%;
  z-index: 1007;
  opacity: 0.6;
`;
