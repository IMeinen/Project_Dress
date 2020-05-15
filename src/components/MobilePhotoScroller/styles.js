
import styled from 'styled-components';
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content:space-evenly;
  width: 100%;
  height: 80px;
  overflow: hidden;


`;

export const ImgItem = styled.div`
  width:50px;
  height: 50px;



  background: ${props => `url(${props.image}) no-repeat`};
  background-size: cover;
`;

export const StyledLeft = styled(FiChevronLeft)`
  width: 26px;
  height: 26px;
  color: #000;
`;

export const StyledRight = styled(FiChevronRight)`
  width: 26px;
  height: 26px;
  color: #000;
`;
