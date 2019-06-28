import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalFooter from '../templates/globalFooter';
import Login from './login';
import Search from './search';
import List from './list';
import Home from './home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="/list" component={List} />
      <Route path="/" component={Home} />
    </Switch>
    <GlobalFooter />
  </BrowserRouter>
);

export default App;
