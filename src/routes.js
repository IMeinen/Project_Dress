import React,{useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Collections from './pages/Collections';
import Measurements from './pages/Measurements';
import CustomMade from './pages/CustomMade';
import Shoes from './pages/Shoes';
import Faq from './pages/Faq';
import Acessories from './pages/Acessories';
import Contact from './pages/Contact';
import HeaderGlobal from './components/Header';
import Quizz from './pages/Quizz';


export default function Routes() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
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
        <Route path="/quizz" exact component={Quizz} />
        <Route path="/measurements" exact component={Measurements} />
      </Switch>

    </BrowserRouter>
  );
}
