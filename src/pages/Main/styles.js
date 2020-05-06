import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 5% 10% 5% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 468px) {
     padding: 0;
     margin-top: -30px;
    }


`;

export const Footer = styled.div`
  width: 100%;
  height: 46vh;
  padding: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #000;

  .descriptions{
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 33px;

    h5{
      font-size: 16px;
      line-height: 16px;
      font-weight: 700px;
      color: #fff;
    }

    p{
      font-size: 11px;
      line-height: 20px;
      font-weight: 500px;
      color: #fff;
      margin-top: 10px;
    }
  }

  .icons_container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-top: 20px;
    .icon {
      width: 40px;
      height: 40px;
      margin: 7px;
    }
  }
`;
