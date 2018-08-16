import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPick from './ColorPick'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Color Picker Project</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <ColorPick />
        </div>
      </div>
    );
  }
}

export default App;
