import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import ListPage from './pages/list';


import './index.css';

let App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/list" component={ListPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));