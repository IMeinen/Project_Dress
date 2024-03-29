import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 600px;
  padding: 3% 0;

  @media only screen and (max-width: 468px) {
    padding: 0;
    margin-top: -30px;
    min-height: 0px;
    padding: 25px 0;
  }
`;

export const Item = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    font-weight: 500;
    font-size: 21px;
    line-height: 21px;

    @media only screen and (max-width: 468px) {
      font-size: 16px;
      line-height: 20px;
      padding: 0 15px;
    }

    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      max-width: 80%;
    }
  }
`;

export const Options = styled.div`
  margin-top: 15px;
  width: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const CheckIcon = styled(AiOutlineCheck)`
  width: 20px;
  height: 20px;
  color: #188500;
  display: ${(props) => (props.active ? 'inline' : 'none')};
  position: absolute;
  top: 2%;
  right: 5%;
`;

export const ContainerIcon = styled.div`
  position: relative;
  width: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    margin-top: 10px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
  }
`;

export const DescriptionContent = styled.div`
  width: 100%;
  padding: 0% 10% 5% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    margin: 5% 0 -30px 0;
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
      color: #e4e4e4;
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
  width: 49.5%;

  margin: 6px 0;

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1025px) {
    margin-bottom: 20px;
  }
`;

export const SuggestionContainer = styled.div`
  width: 100%;
  padding: 0 3%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;
