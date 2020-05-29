import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 352px;
  padding: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #e4e4e4;
  margin-top: auto;
  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    height: 42vh;
  }

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
    align-items: flex-start;
  }
  .descriptions {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 33px;

    @media only screen and (min-width: 1025px) {
      align-items: flex-start;
      width: 250px;
      margin-top: 30px;

    }

    h5 {
      font-size: 16px;
      line-height: 16px;
      font-weight: 700px;
      color: #fff;
      margin-bottom: 5px;

      @media only screen and (min-width: 1025px) {

        line-height: 24px;
        margin  : 20px 0px 15px 10px;
      }
    }
    p {
      font-size: 11px;
      line-height: 20px;
      font-weight: 500px;
      color: #fff;


      @media only screen and (min-width: 1025px) {
        margin-left: 10px;
        line-height: 23px;
      }
    }
  }

  .icons_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-top: 60px;

    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      margin-top: 5%;
      width: 35%;
    }

    @media only screen and (min-width: 1025px) {
      width: 270px;
      margin-left: auto;
      margin-top: 0;
      align-self:center;
      margin-right: 120px;
      align-items: flex-start;
    }
    .icon {
      width: 40px;
      height: 40px;
      margin: 7px;
    }
  }
`;
