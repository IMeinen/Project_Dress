import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 5%;
  @media only screen and (max-width: 468px) {
  margin-top: -30px;
  }
  .description {
    width: 100%;
    padding: 5% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1025px){
      padding: 5%;
    }

    h1 {
        font-size: 29px;
        line-height: 31px;
        font-weight: 400;
      }

    @media only screen and (max-width: 468px) {
      padding-right: 5px;
      padding-left: 5px;
      h1 {
        font-size: 26px;
        line-height: 28px;
        font-weight: 400;
      }
    }
  }

  .subdescription {
    margin-top: 10px;
    width: 80%;
    text-align: center;
    position: relative;
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

export const StyledVideo = styled.video`
  width: 95%;
  margin: 15px 0;

  @media only screen and (min-width: 1025px) {
    width: 75%;
   margin: 30px 0;
  }
`;
