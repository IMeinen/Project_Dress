import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  position: absolute;
  width: 900px;
  height: 700px;
  padding: 40px;

  @media only screen and (max-width: 1000px) {
    width: 90%;
    height: 90vh;
    align-items: center;
  }
  @media only screen and (max-width: 468px) {
    height: 95vh;
  }
  @media only screen and (max-width: 330px) {
    padding: 20px;
        }
  > .core-informations {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (max-width: 468px) {
      flex-direction: column;
      align-items: center;
    }

    > .image-container {
      width: 360px;
      height: 460px;
      background: #fff;
      @media only screen and (max-width: 468px) {
        width: 230px;
        height: 293px;
      }
      @media only screen and (max-width: 330px) {
          width: 200px;
          height: 254px;
        }
      > img {
        width: 360px;
        height: 460px;
        @media only screen and (max-width: 468px) {
          width: 230px;
          height: 293px;
        }
        @media only screen and (max-width: 330px) {
          width: 200px;
          height: 254px;
        }
      }
    }

    > .description-container {
      width: 90%;
      height: 460px;
      display: flex;
      margin-left: 30px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      color: #fff;

      @media only screen and (max-width: 468px) {
        height: 90%;
        margin: 15px 0px 5px 0px;
      }

      > .description-line {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        @media only screen and (max-width: 468px) {
          h1 {
            font-size: 16px;
          }
          p {
            font-size: 10px;
          }
        }
      }
    }
  }

  > .footer-informations {
    width: 100%;
    margin-top: 40px;

    color: #fff;
    @media only screen and (max-width: 1000px) {
      margin-top: auto;
    }
    @media only screen and (max-width: 468px) {
      h2 {
        font-size: 12px;
      }
    }
    @media only screen and (max-width: 330px) {
      h2 {
        font-size:8px;
      }
    }

  }
`;

export const StyledClose = styled(MdClose)`
  position: absolute;
  top: 15px;
  right: 15px;
  transition: all 0.3s;
  color: #fff;
  font-size: 56px;

  @media only screen and (max-width: 468px) {
    top: 10px;
    right: 10px;
    font-size: 28px;
  }
  &:hover {
    transform: scale(1.2);
    color: #aaa;
  }
`;
