import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <header>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
