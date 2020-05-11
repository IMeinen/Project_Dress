import { createGlobalStyle } from 'styled-components';
// import backgroundImage from '../images/background-LG.png';
// import { LogoIMG } from '../pages/Main/styles';
import myFont from "../assets/fonts/Montserrat-Medium.otf";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gotu&display=swap');
  @font-face {
  font-family: 'MontSerrat';
  src: local('MontSerrat'), url(${myFont}) format('opentype');
}
 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 html,body,#root{
   min-height: 100%;
 }

 body{
  background: #fff;
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;

 }

 h1,h2,h3,h4,h5,p,a,li,span{
  font-family: 'MontSerrat', sans-serif;
 }

 a{
   text-decoration: none!important;
   color: inherit;
 }
 button {
   cursor: pointer;
 }


`;
