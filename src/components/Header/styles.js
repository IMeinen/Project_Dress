import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    left: 40px;
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
    height: 70px;
  }

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    height: 11.5vh;
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
    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      width: 80%;
      padding-left: 30%;
    }
  }

  .appointment {

    border: 1px solid #373739 !important;
    width: 240px;
    height: 56px;
    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      display: none;
    }
  }

  .appointment {

    display: inline;
    margin-left: 60px;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-size: 15px;
      text-decoration: none;
      color: #373739;
    }
  }
  .appointment {
    @media only screen and (min-width: 469px) and (max-width: 1024px) {
      display: none;
    }
  }
`;

export const StyledBars = styled(FaBars)`
  position: absolute;
  top: 55px;

  right: 95px;
  transition: all 0.3s;
  color: #373739;
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

export const Gambia = styled.div`
  width: 100%;

  @media only screen and (max-width: 468px) {
    height: 100px;
  }

  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    height: 11.5vh;
  }
  @media only screen and (min-width: 1025px) {
    height: 131px;
  }
`;

export const PathLink = styled(Link)`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;

  span {
    font-weight: 500px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const BrideLink = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  cursor: pointer;
  span {
    font-weight: 500px;
    font-size: 14px;
    line-height: 20px;
  }
`;
