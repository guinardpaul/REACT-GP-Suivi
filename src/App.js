import React, { Component } from 'react';

// Components
import Clients from './components/clients/Clients';
import Devis from './components/Devis/Devis';

class App extends Component {
  render() {
    return (
      <div>
        <Clients />
        <Devis />
      </div>
    );
  }
}

export default App;
