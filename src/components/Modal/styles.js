import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const StyledClose = styled(MdClose)`
  position: absolute;
  top: 1%;
  right: 1%;
  transition: all 0.3s;
  color: #222;
  font-size: 48px;
  z-index: 1000;

  @media only screen and (max-width: 1025px) {
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
  height: 800px;
  width: 1200px;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 30px;
  z-index: 999;
  overflow-y: scroll;
  @media only screen and (max-width: 1025px) {
    padding: 5px;
    flex-direction: column;
    width: 95%;
    height: 90vh;
  }
  .images-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    width: 55%;
    height: 85%;
    padding: 0 1%;
    @media only screen and (max-width: 1025px) {
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }
  }
  .data-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #fff;
    width: 40%;
    padding-left: 3%;
    padding-top: 5%;
    @media only screen and (max-width: 1025px) {
      width: 100%;
      height: 85%;
      margin-left: 1%;
      padding: 20px;
    }
    h1 {
      font-size: 18px;
      line-height: 18px;
    }

    h2 {
      margin-top: 10px;
      font-size: 16px;
      line-height: 16px;
    }
    h4 {
      margin-top: 10px;

      font-size: 11px;
      line-height: 11px;
    }
  }
`;
