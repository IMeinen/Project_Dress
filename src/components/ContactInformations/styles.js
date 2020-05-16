import styled from 'styled-components';
import {GoMail} from 'react-icons/go';
import {FaInstagram} from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: #F6F4F0;
  padding: 34.6px 42px 0px;
  padding-bottom: 34.6px;
  margin-top: ${props => (props.isHeader ? `-30px` : "0px")};
  h1{
    font-weight: 400;
    font-size: 29px;
    line-height: 31px;
    margin-bottom: 30px;
    margin-top: 40px;
  }
`;

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 15px 0px;
  position: relative;
  .anchor{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    width: 100%;
    height: 100%;

  }
  .link-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-left: 10px;

    >h4{
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 5px;
    }

    >span{
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      margin-bottom: 5px;
    }
  }
`;

export const StyledMail = styled(GoMail)`
  width: 25px;
  height: 25px;
  color: #373739;
`;

export const StyledInstagram = styled(FaInstagram)`
  width: 25px;
  height: 25px;
  color: #373739;
`;

export const StyledPhone = styled(FiPhone)`
  width: 25px;
  height: 25px;
  color: #373739;
`;
