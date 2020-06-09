import styled from 'styled-components';

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -30px;



  .description-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 30px;
    padding: 0px 10%;
    text-align: center;
    margin-bottom: 40px;
    @media only screen and (min-width: 469px)  {
      padding: 0 30px ;
      text-align: left;
      align-items: flex-start;
    }
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
      @media only screen and (min-width: 469px){
        font-size: 13px;
      }
    }
  }
`;

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    height: 300.52px;
  }

  >img{
    max-width: 100%;
  }


  @media only screen and (min-width: 469px) {
    flex-direction: row;

    width: 98%;
    margin: 2%;
    margin-top: 50px;
    >img{
      max-width: 60%;
    }
  }

  @media only screen and (min-width: 1025px) {
    width: 96%;
    margin: 4%;
  }
`;
