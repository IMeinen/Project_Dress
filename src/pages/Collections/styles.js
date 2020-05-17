import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 3%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DescriptionContent = styled.div`
  width: 100%;
  padding: 0% 10% 5% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    margin-top: 80px;
  }

  h1 {
    font-size: 2.3em;
    font-weight: 400;
    font-style: normal;
    line-height: 1.1em;
    text-decoration: none;
    text-transform: none;
    letter-spacing: -1.5px;

    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      font-size: 26px;
      font-weight: 400;
      font-style: normal;
      line-height: 29px;
    }
  }

  @media only screen and (max-width: 468px) {
    padding-right: 5px;
    padding-left: 5px;
    h1 {
      font-size: 29px;
      line-height: 31px;
    }
  }

  .subdescription {
    margin-top: 10px;
    width: 80%;
    text-align: center;
    position: relative;
    p {
      font-size: 1.5em;
      font-weight: 200;
      font-style: normal;
      line-height: 1.1em;
      text-decoration: none;
      text-transform: none;
      letter-spacing: -1.5px;
      color: #373739;
      @media only screen and (min-width: 469px) and (max-width: 1024px) {
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        line-height: 20px;
      }
    }
    @media only screen and (max-width: 468px) {
      width: 100%;
      p {
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
`;

export const DressImage = styled.img`

  max-width: 100%;
  width: ${props => props.width  ? `${props.width}%` : '100%'};
  margin-top: ${props => props.adjustTop ? `-45%` : '0'};
  margin-bottom: 20px;

`;
