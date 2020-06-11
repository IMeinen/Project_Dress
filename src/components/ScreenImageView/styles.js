import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export const StyledClose = styled(MdClose)`
  position: absolute;

  transition: all 0.3s;
  color: #191919;
  font-size: 56px;
  z-index: 1002;


    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    font-size: 28px;

`;

export const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #191919;
  position: absolute;
  right: 5%;
  top: 7%;
  z-index: 1007;

  @media only screen and (min-width: 1025px) {
    top: 10%;
  }
`;
export const Container = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 1007;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1025px) {
    width: 1100px;
    height: 800px;
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

export const CustomImage = styled.img`

  width: 80%;
  height: 80vh;
  object-fit: cover;
  margin-left: 10%;
  margin-bottom: 10vh;

  @media only screen and (min-width: 1025px) {
    width:  ${props => props.type === "dress" ? "600px" : "800px"};
    height: ${props => props.type === "dress" ? "700px" : "600px"};
    margin: 0;
    margin-top: 100px;
  }


`;
