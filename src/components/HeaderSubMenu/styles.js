import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubMenu = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 4px;
  background: #fff;
  z-index: 1003;
  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 0.50.5.0.5 */
  -moz-animation: fadein 0.5s; /* Firefox < 0.56 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 0.50.5.0.5 */
  animation: fadein 0.5s;

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
  @media only screen and (min-width: 469px) and (max-width: 1024px) {
    height: 256px;
  }
`;

export const ContainerLinks = styled.div`
  width: 50%;
`;

export const StyledLink = styled(Link)`
  margin-left: 25%;
  width: 75%;
  height: 51.2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
  }
`;
