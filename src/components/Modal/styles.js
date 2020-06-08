import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {IoIosArrowDown} from 'react-icons/io';

export const StyledClose = styled(MdClose)`
  position: fixed;
  top: 5%;
  right: 5%;
  transition: all 0.3s;
  color: #222;
  font-size: 48px;
  z-index: 1000;

  @media only screen and (max-width: 1025px) {
    top: 6%;
    right: 5%;
    font-size: 30px;
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
    h3 {
      margin-top: 10px;
      font-size: 12px;
      line-height: 14px;
      text-decoration: line-through;
      opacity: 0.8;
    }


    h4 {
      margin-top: 10px;

      font-size: 11px;
      line-height: 11px;
    }
  }
`;
export const Measure = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: ${props => props.active ? '200px' : '66px'};

  width: 93%;
  background: #fff;

  color: #fff;
  text-transform: none;
  margin: 10px 0px;

  .line{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
  span{
    font-size: 14px;
    line-height: 66px;
  }

`;

export const IconActive = styled(IoIosArrowDown)`


  width: 24px;
  height: 24px;
  color: #191919;
  padding-bottom: 6px;
  margin-left: 6px;
  transition: all 0.3s ease-out;
  overflow: hidden;
  transform: ${props => (props.rotate ? `rotate(-90deg)` : "rotate(0)")};
`;

export const ContentMeasure = styled.div`
  display: ${props => props.active ? 'flex' : 'none'};
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100px;
  padding: 0 15px;

  img{
    max-width: 95%;
    padding: 15px 0;
  }

  .low_text{
    padding: 15px 0 25px 0;
  }
`;
