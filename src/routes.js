import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Collections from './pages/Collections';
import CustomMade from './pages/CustomMade';
import Shoes from './pages/Shoes';
import Faq from './pages/Faq';
import Acessories from './pages/Acessories';
import Contact from './pages/Contact';
import HeaderGlobal from "./components/Header"


export default function Routes(){
  return(
  <BrowserRouter>
    <HeaderGlobal />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/collection/:collection" exact component={Collections} />
      <Route path="/custom-made" exact component={CustomMade} />
      <Route path="/shoes/:collection" exact component={Shoes} />
      <Route path="/acessories/:year" exact component={Acessories} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/faq" exact component={Faq} />
    </Switch>
  </BrowserRouter>);
}
