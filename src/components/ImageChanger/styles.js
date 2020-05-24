import styled from 'styled-components';

export const CustomImage = styled.div`
  width: 100%;
  height: 60vh;
  /* object-fit: cover; */
  background: ${props => `url(${props.image}) no-repeat`};
  background-size: cover;

`;
