import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import HeaderGlobal from "./components/Header"

function App() {
  return (
    <>
      <HeaderGlobal />
      <Routes/>
      <GlobalStyle />
    </>
  );
}

export default App;
