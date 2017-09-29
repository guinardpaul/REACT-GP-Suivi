import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tableau from '../shared/Table/Tableau';

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
      // TODO: A remplacer par attribut de la classe Devis définie
      devisAttributs: ['ref', 'montant']
    };

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
    return (
      <div className="container">
        <Tableau onUpdate={this.handleUpdate} onDelete={this.handleDelete} listAttributs={this.state.devisAttributs} listHeaders={this.state.devisHeader} listBody={this.state.devis} />
      </div>
    );
  }
}

Devis.PropTypes = {
  devisHeader: PropTypes.array,
  devis: PropTypes.array,
  componentDidMount: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func
}

export default Devis;
