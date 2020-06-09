import styled from 'styled-components';

export const CustomImage = styled.div`
  width: 100%;
  background: ${props => `url(${props.image}) no-repeat top center`};
  background-size: cover;


  @media only screen and (max-width: 1025px) {
    height: 60vh;
  }
  @media only screen and (min-width: 1025px) {
    width: 400px;
    min-height: 600px;
  }
`;


