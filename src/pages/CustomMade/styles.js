import styled from 'styled-components';

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -30px;

  >img{
    max-width: 100%;
  }

  .description-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 30px;
    padding: 0px 10%;
    text-align: center;
    margin-bottom: 30px;
    h1{
      font-weight: 700;
      font-size: 21px;
      line-height: 31px;
    }

    p{
      margin-top: 20px;
      font-weight: 590;
      font-size: 17px;
      line-height: 20px;
    }
  }
`;
