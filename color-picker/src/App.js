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
        </header>
        <section>
          <ColorPick />
        </section>
      </div>
    );
  }
}

export default App;
