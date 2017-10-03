import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tableau from '../shared/Table/Tableau';
import AddClientForm from './Client-Form/AddClientForm';
import AddButton from '../shared/Table/Button/AddButton';

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
      addForm: false
    };

    this.displayForm = this.displayForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      clients: CLIENTS
    }, () => {
      console.log(this.state.clients);
    });
  }

  displayForm() {
    this.setState({
      addForm: true
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
    let addClientForm;
    if (this.state.addForm) {
      addClientForm = <AddClientForm />;
    } else {
      addClientForm = <AddButton btnTitle="Ajouter client" onAddClick={this.displayForm} />;
    }

    return (
      <div className="container">
        <Tableau onUpdate={this.handleUpdate} onDelete={this.handleDelete} listHeaders={this.state.clientHeader} listBody={this.state.clients} />
        <div className="container-fluid">
          {addClientForm}
        </div>
      </div>
    );
  }
}

Clients.PropTypes = {
  clientHeader: PropTypes.arrayOf(PropTypes.string),
  clients: PropTypes.arrayOf(PropTypes.Object),
  componentDidMount: PropTypes.func,
  displayForm: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
  addClientForm: PropTypes.element
}

export default Clients;
