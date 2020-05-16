import styled from 'styled-components';

export const CharItem = styled.li`
  position: relative;
  width: 250px;
  height: 300px;
  margin: 5px;
  background-color: #333;
  overflow: hidden;

  @media only screen and (max-width: 468px) {
    width: 83px;
    height: 100px;
  }

  &:hover {
    > img {
      transform: scale(1.1);
    }
  }

  > img {
    max-width: 100%;
    background-size: cover;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  > .description {
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 24px;
    z-index: 6;
    padding-top: 20px;
    color: #fff;
    text-align: center;
    font-weight: 700;
    text-shadow: 2px 2px 2px #373739;

    @media only screen and (max-width: 468px) {
      bottom: 8px;
      > h1 {
        font-size: 10px;
      }
    }
  }
`;

export const ItemsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 60vh;
  overflow-y: scroll;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
  }

  @media only screen and (min-width: 469px) and (max-width: 1200px) {
    margin-top: 30px;
  }
`;
