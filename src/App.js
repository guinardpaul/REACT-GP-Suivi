import React, { Component } from 'react';
import './App.css';
import Clients from './components/clients/Clients';
import Devis from './components/Devis/Devis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clients />
        {/* <Devis /> */}
      </div>
    );
  }
}

export default App;
