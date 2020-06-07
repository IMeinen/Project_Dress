import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FiChevronRight} from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 48vh;
  background: ${props => `url(${props.BGImage}) no-repeat`};
  background-size: cover;
  background-position: ${props => `${props.align} top`};
  position: relative;
  @media only screen and (min-width: 1025px) {
    height: 600px;
  }
`;

export const Discovery = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 193px;
  left: 50%;
  bottom: 50px;

  transform: translateX(-50%);

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: ${props => `${props.textColor}!important`};
  }
`;

export const LinkButton = styled(Link)`
  position: relative;
  width: 152px;
  height:46px;
  padding: 12px 35px;
  border: 1px solid;
  border-color: ${props => `${props.color}!important`};
  margin-top: 5px;
  margin-left: 5px;

  P{
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: ${props => `${props.textColor}!important`};
  }
`;

export const RightIndicator = styled(FiChevronRight)`
  position: absolute;
  width: 17px;
  height: 17px;
  color: ${props => `${props.textColor}!important`};
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const OnlifeContainer = styled.div`
  width: 200px;
  height: 200px;

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate( -50%,-50% );
  text-align: center;
  img{
    max-width: 100%;
  }

  /* p {
    position: absolute;
    width: 100%;
  top: 90%;
  left: 50%;
  transform: translate( -50%,-50% );
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

  } */

  .description-onlife{

    position: absolute;
    width: 100%;
    top:90%;
    left: 50%;
    transform: translate( -50%,-50% );
  }
  .description-blur{

position: absolute;
width: 100%;
top:60%;
left: 50%;
transform: translate( -50%,-50% );
}

.description-onlife,.description-blur{
  h1 {
      font-size: 18px;
      line-height: 20px;
    }
    p {


    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

  }
  }
`;

