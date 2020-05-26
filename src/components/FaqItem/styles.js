import styled from 'styled-components';
import {IoIosArrowDown} from 'react-icons/io';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom : 20px;

`;

export const LinkItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 64px;
  border: 1px solid rgba(55, 55, 57, 0.3);

  .button-question {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    overflow-wrap: break-word;
    padding: 20px;
    h1 {
      max-width: 90%;
      font-size: 18px;
      line-height: 18px;
      font-weight: 400;
    }
  }
`;


export const AnswerItem = styled.div`
  width: 100%;
  display: ${props => props.active ?  'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-wrap: break-word;
  padding: 20px;
  p {
    max-width: 90%;
    font-weight: 400;
  }
`;

export const IconActive = styled(IoIosArrowDown)`


  width: 24px;
  height: 24px;
  color: #373739;
  padding-bottom: 6px;
  margin-left: 6px;
  transition: all 0.3s ease-out;
  overflow: hidden;
  transform: ${props => (props.rotate ? `rotate(-90deg)` : "rotate(0)")};
`;
