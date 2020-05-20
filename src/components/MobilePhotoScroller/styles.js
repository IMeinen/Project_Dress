
import styled from 'styled-components';
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content:space-evenly;
  width: 300px;
  height: 80px;
  overflow: hidden;

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    margin-top: 30px;
    width: 500px;
  }
`;

export const ImgItem = styled.div`
  width:50px;
  height: 50px;


  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
  background: ${props => `url(${props.image}) no-repeat`};
  background-size: cover;
`;

export const StyledLeft = styled(FiChevronLeft)`
  width: 26px;
  height: 26px;
  color: #373739;
`;

export const StyledRight = styled(FiChevronRight)`
  width: 26px;
  height: 26px;
  color: #373739;
`;
