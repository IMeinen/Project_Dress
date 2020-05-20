import styled from 'styled-components';

export const FooterContainer = styled.div`

  width: 100%;
  height: 242px;
  padding: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #373739;
  margin-top: auto;
  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    height: 42vh;
  }

  .descriptions {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 33px;

    h5 {
      font-size: 16px;
      line-height: 16px;
      font-weight: 700px;
      color: #fff;
      margin-bottom: 5px;
    }
    p {
      font-size: 11px;
      line-height: 20px;
      font-weight: 500px;
      color: #fff;
      margin-top: 5px;
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
    .icon {
      width: 40px;
      height: 40px;
      margin: 7px;
    }
  }
`;
