import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Login from './pages/login';
import Register from './pages/register';

import './index.css';

let App = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Login></Login>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));