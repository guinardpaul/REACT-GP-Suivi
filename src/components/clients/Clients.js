import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tableau from '../shared/Table/Tableau';

const CLIENTS = [
  { nom: 'Toto', prenom: 'toto' },
  { nom: 'GUINARD', prenom: 'Paul' },
  { nom: 'Guignolo', prenom: 'Polo' },
  { nom: 'Mas', prenom: 'Bou' },
  { nom: 'Gau', prenom: 'Thier' },
];

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      clientHeader: ['Nom', 'Prénom', 'Actions'],
      // TODO: A remplacer par attribut de la classe Client définie
      clientAttributs: ['nom', 'prenom']
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      clients: CLIENTS
    }, () => {
      console.log(this.state.clients)
    });
  }

  handleUpdate(obj) {
    console.log(obj);
  }

  handleDelete(obj) {
    let newState = this.state.clients;
    let i = newState.indexOf(obj);
    newState.splice(i, 1);

    this.setState({
      clients: newState
    });
  }

  render() {
    return (
      <div className="container">
        <Tableau onUpdate={this.handleUpdate} onDelete={this.handleDelete} listAttributs={this.state.clientAttributs} listHeaders={this.state.clientHeader} listBody={this.state.clients} />
      </div>
    );
  }

}

Clients.PropTypes = {
  clientHeader: PropTypes.array,
  clients: PropTypes.array,
  componentDidMount: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func
}

export default Clients;
