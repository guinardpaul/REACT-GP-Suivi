import React, { Component } from 'react';
import Table from '../shared/Table/Table';

const CLIENTS = [
  {nom: 'Toto', prenom: 'toto'},
  {nom: 'Polo', prenom: 'Polo'},
  {nom: 'Fofo', prenom: 'Fofo'},
  {nom: 'Bobo', prenom: 'Bobo'},
  {nom: 'Toto', prenom: 'toto'},
];

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    this.setState({
      clients: CLIENTS
    });
    console.log(this.state.clients)
  }

  render() {
    return (
      <div>
        <Table list={this.state.clients} />
      </div>
    );
  }

}

export default Clients;
