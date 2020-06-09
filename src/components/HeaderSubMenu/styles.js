import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowDown} from 'react-icons/io';

export const SubMenu = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 1px;
  background: #fff;
  z-index: 1222;
  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 0.50.5.0.5 */
  -moz-animation: fadein 0.5s; /* Firefox < 0.56 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 0.50.5.0.5 */
  animation: fadein 0.5s;

  h1 {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 11.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 468px) {
    display: none;
  }
  @media only screen and (min-width: 469px) {
    min-height: 256px;
    padding-bottom: 10px;
  }
`;

export const ContainerLinks = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10%;
  .link-text {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
  }

  .only-link{
    margin-top: 20px;
  }
`;


export const Acordeon = styled.div`
  width: 100%;
  height: ${(props) => (props.active ? 'auto' : '42px')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and (min-width: 469px) {
    margin-top: 30px;

  }

  .title{

    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }

  h1 {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;

  }

  .internal-items {
    display: ${(props) => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 20px;
    h1 {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    margin-top: 5px;
  }
  }
`;

export const IconActive = styled(IoIosArrowDown)`


  width: 24px;
  height: 24px;
  color: #191919;
  padding-bottom: 6px;
  margin-left: 6px;
  transition: all 0.3s ease-out;
  overflow: hidden;
  transform: ${props => (props.rotate ? `rotate(-90deg)` : "rotate(0)")};
`;
