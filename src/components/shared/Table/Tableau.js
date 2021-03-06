import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

import { Table } from 'react-bootstrap';

class Tableau extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdate(obj) {
    this.props.onUpdate(obj);
  }

  handleDelete(obj) {
    this.props.onDelete(obj);
  }

  render() {
    const tableHeader = this.props.listHeaders.map((item, index) => {
      return <TableHeader header={item} key={index} />
    });

    const tableBody = this.props.listBody.map((item, index) => {
      return <TableBody item={item} key={index} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
    });

    return (
      <Table responsive striped hover>
        <thead>
          <tr>
            {tableHeader}
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    );
  }
}

Tableau.prototypes = {
  listHeaders: PropTypes.arrayOf(PropTypes.string),
  listBody: PropTypes.arrayOf(PropTypes.object),
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
  tableBody: PropTypes.element.isRequired,
  tableHeader: PropTypes.element.isRequired
};

export default Tableau;
