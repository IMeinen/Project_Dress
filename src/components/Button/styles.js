import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ButtonPrimary = styled(Link)`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 220px;
  background: #000;
  border: 2px solid #000;
  color: #fff;
  text-transform: none;
  margin: 10px 0px;

  span {
    font-size: 14px;
    line-height: 14px;
  }
  &:hover {
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    background-color: #fff;
    color: #000;

  }

  @media only screen and (max-width: 468px) {
    height: 48px;
  }
`;

export const ButtonSecondary = styled.button`
  height: 56px;
  width: 200px;
  background: #fff;
  box-sizing: border-box;
  border: 2px solid #000;
  color: #000;
  text-transform: none;
  margin-left: 20px;


  &:hover {
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    background-color: #000;
    color: #fff;

  }

  @media only screen and (max-width: 468px) {
    height: 48px;
  }
`;
