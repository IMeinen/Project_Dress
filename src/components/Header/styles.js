import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {Link } from 'react-router-dom';

export const LogoIMG = styled.img`
  display: block;
  position: absolute;
  width: 225px;
  height: 40px;
  left: 80px;
  z-index: 6;
  @media only screen and (max-width: 468px) {
    width: 225px;
    height: 40px;
    left: 10px;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 129px;
  background: #fff;
  position: absolute;

  z-index: 99;
  -webkit-box-shadow: 0px 4px 0px 0px rgba(233, 234, 236, 0.92);
  -moz-box-shadow: 0px 4px 0px 0px rgba(233, 234, 236, 0.92);
  box-shadow: 0px 4px 0px 0px rgba(233, 234, 236, 0.92);

  @media only screen and (max-width: 468px) {
    width: 100%;
    height: 70px;
  }

  .header-links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    padding-left: 20%;
    @media only screen and (max-width: 468px) {
      display: none;
     }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    .appointment {
      border: 1px solid black !important;
      width: 240px;
      height: 64px;
      padding: 16px;
    }
    li,
    .appointment {
      display: inline;
      margin-left: 60px;
      cursor: pointer;
      a {
        font-size: 15px;
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

export const StyledBars = styled(FaBars)`
  position: absolute;
  top: 55px;

  right: 95px;
  transition: all 0.3s;
  color: #222;
  font-size: 56px;

  @media only screen and (min-width: 469px) {
    display: none;
  }

  @media only screen and (max-width: 468px) {
    top: 20px;
    right: 20px;
    font-size: 28px;
  }
  &:hover {
    transform: scale(1.2);
    color: #aaa;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  width: 225px;
  height: 40px;
  left: 10px;
`;
