import styled from 'styled-components';

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  .description-container,
  .description-onlife {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 30px;
    padding: 0px 10%;
    text-align: center;
    margin-bottom: 40px;
    @media only screen and (min-width: 469px) {
      padding: 0 30px;
      text-align: left;
      align-items: flex-start;
    }
    h1 {
      font-weight: 700;
      font-size: 21px;
      line-height: 31px;
    }

    p {
      margin-top: 20px;
      font-weight: 590;
      font-size: 17px;
      line-height: 20px;
      @media only screen and (min-width: 469px) {
        font-size: 13px;
      }
    }
  }

  .description-onlife {
    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      justify-content: center;
      text-align: center;

      h1 {
        text-align: center;
        align-self: center;
      }

      p {
        width: 80%;
        align-self: center;
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

  > img {
    max-width: 100%;
  }

  .button-action {
    margin-top: 20px;
    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      margin-top: 50px;
    }

    @media only screen and (min-width: 1025px)  {
      margin-top: 60px;
    }
  }
  @media only screen and (min-width: 469px) {
    flex-direction: row;

    width: 98%;
    margin: 2%;

    > img {
      max-width: 60%;
    }
  }

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    margin-top: 24px;
  }

  @media only screen and (min-width: 1025px) {
    width: 96%;
    margin: 4%;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 1025px) {
    width: 40%;
    padding: 30px;
    padding-right: 60px;
  }
`;

export const DescContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 1025px) {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10% 0 6%;


  }
`;


export const BigContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
  }
`;
