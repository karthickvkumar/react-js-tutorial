import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

let App = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Header></Header>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));