import logo from '../../logo.svg';
import './App.css';
import React, { Component } from 'react';
import Home from '../Home/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render = () => {
    return (
      <main>
        <h1>header comp here</h1>
        <Home />
        <h1>route facts comp here</h1>
        <h1>route favorites comp here</h1>
        <h1>route error comp here</h1>
      </main>
    )
  }
}

export default App;
