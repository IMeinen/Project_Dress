import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const StyledClose = styled(MdClose)`
  position: absolute;
  top: 1%;
  right: 1%;
  transition: all 0.3s;
  color: #222;
  font-size: 56px;
  z-index: 1000;

  @media only screen and (max-width: 468px) {
    top: 10px;
    right: 10px;
    font-size: 28px;
  }
  &:hover {
    transform: scale(1.2);
    color: #aaa;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: #fff;
  height: 90vh;
  width: 90%;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 30px;
  z-index: 999;
  @media only screen and (max-width: 468px) {
    padding: 5px;
  }
  .images-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    width: 55%;
    height: 85%;
    @media only screen and (max-width: 468px) {
      width: 100%;
      margin-top: 30px;
      justify-content: center;
      align-items: flex-start;
    }
  }
  .data-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #fff;
    width: 43%;
    height: 85%;
    margin-left: 1%;
    padding: 20px;
    @media only screen and (max-width: 468px) {
     display: none;
    }
  }
`;
