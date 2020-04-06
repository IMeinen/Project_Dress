import { createGlobalStyle } from 'styled-components';
// import backgroundImage from '../images/background-LG.png';
// import { LogoIMG } from '../pages/Main/styles';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gotu&display=swap');
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
  background: rgb(17,17,17);
  background: linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(20,49,27,1) 93%);
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;

 }

 h1,h2,h3,p,a{
  font-family: 'Gotu', sans-serif;
 }
 button {
   cursor: pointer;
 }

 @media only screen and (min-width: 468px){
    /* width */
    ::-webkit-scrollbar {
      width: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #266136;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #2d703f;
    }
  }
`;
