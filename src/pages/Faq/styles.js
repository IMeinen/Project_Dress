import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 5%;

  .description{
    width: 100%;
    padding: 0% 10% 10% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 468px) {
    padding-right: 5px;
    padding-left: 5px;
    h1 {
      font-size: 29px;
      line-height: 31px;
      font-weight: 400;
    }
  }
  }
`;
