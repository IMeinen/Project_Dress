import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import HeaderGlobal from "./components/Header"

export default function Routes(){
  return(
  <BrowserRouter>
    <HeaderGlobal />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
    </Switch>
  </BrowserRouter>);
}
