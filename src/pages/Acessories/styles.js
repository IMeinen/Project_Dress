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

  h1 {
    font-size: 2.3em;
    font-weight: 400;
    font-style: normal;
    line-height: 1.1em;
    text-decoration: none;
    text-transform: none;
    letter-spacing: -1.5px;


  }
  @media only screen and (max-width: 468px) {
      padding-right: 5px;
      padding-left: 5px;
      h1{
      font-size: 29px;
      line-height: 31px;
      }
    }

  .subdescription {
    margin-top: 10px;
    width: 50%;
    text-align: center;

    p {
      font-size: 1.5em;
      font-weight: 200;
      font-style: normal;
      line-height: 1.1em;
      text-decoration: none;
      text-transform: none;
      letter-spacing: -1.5px;
      color: #373739;
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

export const AcessorieImage = styled.img`
 width: 100%;
  margin: 10px 0px 5px 0px;

  @media only screen and (min-width: 469px) {
    width: ${props => props.width  ? `${props.width}%` : '100%'};
    margin-top: ${props => props.adjustTop ? `-45%` : '0'};
    margin-bottom: 20px;
  }
`;
