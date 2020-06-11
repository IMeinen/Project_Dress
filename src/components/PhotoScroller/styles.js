import styled from 'styled-components';
import {FiChevronUp, FiChevronDown} from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  background: #fff;
  width: 150px;
  height: 90%;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
     display: none;
    }

`;

export const ImgItem = styled.div`
  width:100px;
  height: 100px;
  border-bottom: ${props =>  props.active ? '2px solid #191919' : ''};

  margin: 10px;
  background: ${props => `url(${props.image}) no-repeat top center`};
  background-size: cover;
`;

export const StyledUp = styled(FiChevronUp)`
  width: 36px;
  height: 36px;
  color: #191919;
`;

export const StyledDown = styled(FiChevronDown)`
  width: 36px;
  height: 36px;
  color: #191919;
`;
