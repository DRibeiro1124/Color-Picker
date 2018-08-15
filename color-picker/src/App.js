import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: '',
      saturation: '',
      lightness : ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Color Picker Project</h1>
        </header>
        <section>

        </section>
      </div>
    );
  }
}

export default App;
