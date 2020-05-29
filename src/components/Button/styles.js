import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ButtonPrimary = styled(Link)`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px!important;
  width: 93%;
  background: #fff;
  border: 1px solid #e4e4e4;
  color: #fff;
  text-transform: none;
  margin: 10px 0px;

  span {
    font-size: 14px;
    line-height: 66px;
  }
  &:hover {
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    background-color: #fff;
    color: #fff;

  }


`;

export const ButtonSecondary = styled.button`
  height: 56px;
  width: 200px;
  background: #fff;
  box-sizing: border-box;
  border: 2px solid #e4e4e4;
  color: #e4e4e4;
  text-transform: none;
  margin-left: 20px;


  &:hover {
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    background-color: #e4e4e4;
    color: #fff;

  }

  @media only screen and (max-width: 468px) {
    height: 48px;
  }
`;
