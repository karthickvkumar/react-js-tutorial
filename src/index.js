import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Login from './pages/login';
import Register from './pages/register';

let App = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      {/* <Header></Header> */}
      <Login></Login>
      <Register></Register>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));