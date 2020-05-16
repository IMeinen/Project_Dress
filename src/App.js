import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import RightButton from './components/RightButton';

function App() {
  return (
    <>
      <RightButton />
      <Routes/>
      <GlobalStyle />
    </>
  );
}

export default App;
