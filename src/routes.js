import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Collections from './pages/Collections';
import HeaderGlobal from "./components/Header"

export default function Routes(){
  return(
  <BrowserRouter>
    <HeaderGlobal />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/collection/:collection" exact component={Collections} />
    </Switch>
  </BrowserRouter>);
}
