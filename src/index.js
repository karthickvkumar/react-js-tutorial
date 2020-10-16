import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/register';
import Login from './pages/login';


import './index.css';

let App = () => {
  return (
  <div>
    <Login></Login>
  </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));