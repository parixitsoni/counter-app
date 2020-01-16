import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counters />
      </div>
    );
  }
}

export default App;