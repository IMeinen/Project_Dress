import styled from 'styled-components';

export const LogoIMG = styled.img`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 125px;

  @media only screen and (max-width: 468px) {
    width: 150px;
    height: 93px;
  }
`;

export const HintText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  margin: 15px 0px 15px 0px;

  @media only screen and (max-width: 468px) {
    h2 {
      font-size: 0.7em;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 1320px;
  background-color: transparent;
  @media only screen and (min-width: 1201px) and (max-width: 1500px) {
    width: 80%;
  }
  @media only screen and (max-width: 1200px) {
    width: 90%;
    margin-top: 15px;
    justify-content: center;
  }


`;

