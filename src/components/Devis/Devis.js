import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tableau from '../shared/Table/Tableau';
import AddButton from '../shared/Table/Button/AddButton';

const DEVIS = [
  { ref: 'dev01', montant: 1250 },
  { ref: 'dev02', montant: 1250 },
  { ref: 'dev03', montant: 1250 },
  { ref: 'dev04', montant: 1250 },
  { ref: 'dev05', montant: 1250 },
];

class Devis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devis: [],
      devisHeader: ['Ref', 'Montant', 'Actions'],
      addForm: false
    };

    this.displayForm = this.displayForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      devis: DEVIS
    }, () => {
      console.log(this.state.devis)
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
    let newState = this.state.devis;
    let i = newState.indexOf(obj);
    newState.splice(i, 1);

    this.setState({
      devis: newState
    });
  }

  render() {
    let addDevisForm;
    if (this.state.addForm) {
      addDevisForm;
    } else {
      addDevisForm = <AddButton btnTitle="Ajouter devis" onAddClick={this.displayForm} />;
    }

    return (
      <div className="container">
        <Tableau onUpdate={this.handleUpdate} onDelete={this.handleDelete} listHeaders={this.state.devisHeader} listBody={this.state.devis} />
        {addDevisForm}
      </div>
    );
  }
}

Devis.PropTypes = {
  devisHeader: PropTypes.arrayOf(PropTypes.string),
  devis: PropTypes.arrayOf(PropTypes.Object),
  componentDidMount: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func
}

export default Devis;
