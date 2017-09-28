import React, { Component } from 'react';
import ConsulterButton from './ConsulterButton';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';

class TableItems extends Component {
  constructor(props) {
    super(props);

  }

  handleConsulter(){

  }

  handleUpdate(){

  }

  handleDelete(){

  }

  render() {
    return (
      <tr>
        <td>{this.props.item.nom}</td>
        <td>{this.props.item.prenom}</td>
        <td><ConsulterButton onConsulter={this.handleConsulter} /></td>
        <td><UpdateButton onUpdate={this.handleUpdate} /></td>
        <td><DeleteButton onDelete={this.handleDelete} /></td>
      </tr>
    );
  }

}

export default TableItems;
