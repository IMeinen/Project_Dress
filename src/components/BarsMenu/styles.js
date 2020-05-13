import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const CustomMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 110vh;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  padding: 15px;
  animation: 0.3s ease-out 0s 1 slideInFromLeft;
@keyframes slideInFromLeft {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 0px 0px 15px;

  h1{
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    color: #000;
  }

  .appointment {
      margin-top: 5%;
      margin-right: 5%;
      border: 1px solid black !important;
      width: 90%;
      height: 64px;
      padding: 16px;
      align-self: center;
      display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
      a{
        text-align : center;
      }
    }

  li{
    list-style-type: none;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    font-size: 18px;
    color: #000;
    margin: 5px 0px;

  }
`;



export const StyledClose = styled(MdClose)`
  position: absolute;
  top: 3%;
  right: 3%;
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
