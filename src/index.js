import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Login from './pages/login';
import Register from './pages/register';

import './index.css';

let App = () => {
  return (
    <div>
      {/* <Login></Login> */}
      <Register></Register>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));