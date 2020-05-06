import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  background: #fff;
  width: 200px;
  height: 90%;
  overflow: hidden;

  @media only screen and (max-width: 468px) {
     display: none;
    }

`;

export const ImgItem = styled.div`
  width:150px;
  height: 250px;


  margin: 10px;
  background: ${props => `url(${props.image}) no-repeat`};
  background-size: cover;
`;
