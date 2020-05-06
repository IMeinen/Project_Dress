import styled from 'styled-components';

export const CustomImage = styled.div`
  width: 60%;
  height: 100%;
  background: #ddd;
  margin-left: 20px;
  background: ${props => `url(${props.background}) no-repeat`};
  background-size: cover;

  @media only screen and (max-width: 468px) {
     width: 90%;
     height: 60%;
     margin: 0;
    }
`;
