import styled from 'styled-components';

export const CustomImage = styled.div`
  width: 100%;
  background: ${props => `url(${props.image}) no-repeat top center`};
  background-size: cover;


  @media only screen and (max-width: 1025px) {
    height: ${props => props.type === 'dress' ? '60vh' : '40vh'};
  }
  @media only screen and (min-width: 1025px) {
    width: 550px;
    min-height: 450px;
  }
`;


